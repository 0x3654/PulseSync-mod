import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import Icon from '../components/ui/Icon.jsx'
import getCoverUrls from '../utils/getCoverUrls.js'

import './NotchApp.css'

const ACTION_CHANNEL = 'NOTCHPLAYER_PLAYER_ACTION'
const STALE_PROGRESS_STATUSES = ['buffering', 'loadingMediaSource']

const MODE = new URLSearchParams(window.location.search).get('mode') === 'island' ? 'island' : 'notch'
const MENU_BAR_HEIGHT = Number(new URLSearchParams(window.location.search).get('mbh')) || 0
const DEFAULT_PILL_HEIGHT = MODE === 'island' ? 26 : 32
const PILL_HEIGHT = MENU_BAR_HEIGHT > 0 ? Math.min(DEFAULT_PILL_HEIGHT, MENU_BAR_HEIGHT) : DEFAULT_PILL_HEIGHT

function useNotchPlayer() {
    const [playerState, setPlayerState] = useState(null)
    const [ready, setReady] = useState(false)
    const [flash, setFlash] = useState(null)
    const [menuItems, setMenuItems] = useState(null)
    const [showShuffleRepeat, setShowShuffleRepeat] = useState(false)
    const [alwaysTimestamps, setAlwaysTimestamps] = useState(false)
    const lastGoodProgressRef = useRef(0)
    const prevActionsRef = useRef(null)
    const flashTimerRef = useRef(null)

    useEffect(() => {
        const unsubSettings = window.desktopEvents?.on('NOTCHPLAYER_SETTINGS_STATE', (_, settings) => {
            setShowShuffleRepeat(settings?.notchplayer?.showShuffleRepeat === true)
            setAlwaysTimestamps(settings?.miniplayer?.alwaysShowPlayerTimestamps === true)
        })
        const unsubMenu = window.desktopEvents?.on('NOTCHPLAYER_MENU_ITEMS', (_, items) => {
            setMenuItems(Array.isArray(items) && items.length > 0 ? items : null)
        })
        const unsub = window.desktopEvents?.on('NOTCHPLAYER_PLAYER_STATE', (_, state) => {
            // в buffering плеер шлёт стухший прогресс — держим последний валидный
            const isStale = STALE_PROGRESS_STATUSES.includes(state?.status)
            if (!isStale && state) {
                lastGoodProgressRef.current = state.progress
            }
            setPlayerState(isStale && state ? { ...state, progress: lastGoodProgressRef.current } : state)
            setReady(true)

            // вспышка — только смена лайка одного и того же трека; пустой actionsStore
            // (буферизация) и смена трека — не события
            const a = state?.actionsStore
            const hasLikeData = typeof a?.isLiked === 'boolean' && typeof a?.isDisliked === 'boolean'
            if (hasLikeData) {
                const isLiked = a.isLiked
                const isDisliked = a.isDisliked
                const trackId = state?.track?.id ?? null
                const prev = prevActionsRef.current
                prevActionsRef.current = { trackId, isLiked, isDisliked }
                if (prev?.trackId === trackId && (prev.isLiked !== isLiked || prev.isDisliked !== isDisliked)) {
                    const type = isLiked ? 'like' : isDisliked ? 'dislike' : prev.isLiked ? 'unlike' : 'undislike'
                    setFlash(type)
                    clearTimeout(flashTimerRef.current)
                    flashTimerRef.current = setTimeout(() => setFlash(null), 1300)
                }
            }
        })

        window.desktopEvents?.send('NOTCHPLAYER_READY')

        return () => {
            unsub?.()
            unsubMenu?.()
            unsubSettings?.()
            clearTimeout(flashTimerRef.current)
        }
    }, [])

    return { playerState, ready, flash, menuItems, showShuffleRepeat, alwaysTimestamps }
}

function sendAction(action, value) {
    window.desktopEvents?.send(ACTION_CHANNEL, action, value)
}

const formatTime = seconds => {
    if (!Number.isFinite(seconds) || seconds < 0) return '0:00'
    const m = Math.floor(seconds / 60)
    const s = Math.floor(seconds % 60)
    return `${m}:${String(s).padStart(2, '0')}`
}

function ProgressBar({ durationMs, progress, timestamp, isPlaying, alwaysTimestamps }) {
    const duration = (durationMs ?? 0) / 1000
    const [displayProgress, setDisplayProgress] = useState(progress)
    const [dragRatio, setDragRatio] = useState(null)

    useEffect(() => {
        if (!isPlaying) return

        let raf
        const tick = () => {
            const elapsed = progress + (Date.now() - timestamp) / 1000
            setDisplayProgress(Math.min(elapsed, duration || elapsed))
            raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)

        return () => cancelAnimationFrame(raf)
    }, [progress, timestamp, isPlaying, duration])

    const shown = dragRatio !== null ? dragRatio * duration : isPlaying ? displayProgress : progress

    const ratio = duration > 0 ? Math.min(shown / duration, 1) : 0

    // превью при drag локально, перемотка на отпускание (как в мини-плеере)
    const ratioFromEvent = e => {
        const rect = e.currentTarget.getBoundingClientRect()
        return Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1)
    }

    const onPointerDown = e => {
        if (duration <= 0 || e.button !== 0) return
        e.currentTarget.setPointerCapture(e.pointerId)
        setDragRatio(ratioFromEvent(e))
    }

    const onPointerMove = e => {
        if (dragRatio === null) return
        setDragRatio(ratioFromEvent(e))
    }

    const onPointerUp = e => {
        if (dragRatio === null) return
        const finalRatio = ratioFromEvent(e)
        setDragRatio(null)
        sendAction('SET_PROGRESS', Math.round(finalRatio * duration))
    }

    return (
        <div className={'Notch_progress' + (alwaysTimestamps ? ' Notch_progress_ts' : '')}>
            <span className="Notch_progressTime">{formatTime(shown)}</span>
            <div
                className={'Notch_progressTrack' + (dragRatio !== null ? ' Notch_progressTrack_drag' : '')}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                onPointerCancel={onPointerUp}
            >
                <div className="Notch_progressFill" style={{ width: `${ratio * 100}%` }} />
                <div className="Notch_progressThumb" style={{ left: `${ratio * 100}%` }} />
            </div>
            <span className="Notch_progressTime">{formatTime(duration)}</span>
        </div>
    )
}

function Equalizer({ isPlaying, large = false }) {
    return (
        <div className={'Notch_eq' + (large ? ' Notch_eq_large' : '') + (isPlaying ? ' Notch_eq_playing' : '')}>
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
        </div>
    )
}

function NotchButton({ label, onClick, children, className = '' }) {
    return (
        <button type="button" aria-label={label} onClick={onClick} className={`Notch_button ${className}`}>
            {children}
        </button>
    )
}

function NotchApp() {
    const { playerState, ready, flash, menuItems, showShuffleRepeat, alwaysTimestamps } = useNotchPlayer()
    const [expanded, setExpanded] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [pinned, setPinned] = useState(false)
    const [searchOpen, setSearchOpen] = useState(false)
    const [query, setQuery] = useState('')
    const searchInputRef = useRef(null)
    // openSearch шлёт IPC сразу, до коммита React-стейта; main в ответ делает окно
    // focusable+focus — Chromium синтезирует mouseleave и старое замыкание
    // (searchOpen ещё false) успевает запланировать сворачивание. Проверяем ref.
    const searchOpenRef = useRef(false)
    const [volumeHud, setVolumeHud] = useState(null)
    const volumeRef = useRef(null)
    const volumeHudTimerRef = useRef(null)
    const [subSpinExpired, setSubSpinExpired] = useState(false)
    const [openSub, setOpenSub] = useState(null)
    // DISMISS шлём только если меню нотча открыто и не сразу после его открытия:
    // ресайз окна синтезирует mouseleave, а лишний Escape прихлопывает панели в основном окне
    const menuOpenedAtRef = useRef(0)
    const menuOpenRef = useRef(false)
    const hoverTimerRef = useRef(null)
    const leaveTimerRef = useRef(null)
    // после сворачивания снап окна синтезирует mouseenter — кулдаун против мигания
    const expandCooldownUntilRef = useRef(0)

    // Прозрачные участки окна пропускают клики; над фигурами — включаем приём событий.
    const onMouseEnter = useCallback(() => {
        clearTimeout(leaveTimerRef.current)
        window.desktopEvents?.send('NOTCHPLAYER_SET_MOUSE_EVENTS', true)
    }, [])
    const onMouseLeave = useCallback(() => {
        // курсор ушёл: сворачиваемся, закрываем меню и снова прозрачны для кликов
        clearTimeout(hoverTimerRef.current)
        // закреплено/ищем — панель и меню держим, окно продолжает принимать клики
        if (pinned || searchOpenRef.current) return
        leaveTimerRef.current = setTimeout(() => setExpanded(false), 350)
        const wasMenuOpen = menuOpenRef.current
        setMenuOpen(false)
        menuOpenRef.current = false
        setOpenSub(null)
        // меню было открыто — закрываем и родное (иначе оно останется невидимым
        // в основном окне и «⋯» там будет выглядеть сломанным)
        if (wasMenuOpen) {
            sendAction('NOTCH_MENU_DISMISS')
        }
        window.desktopEvents?.send('NOTCHPLAYER_SET_MOUSE_EVENTS', false)
    }, [pinned])

    // Большая панель открывается по ховеру капсулы (как DynamicNotch)
    const onPillMouseEnter = useCallback(() => {
        if (Date.now() < expandCooldownUntilRef.current) return
        clearTimeout(leaveTimerRef.current)
        clearTimeout(hoverTimerRef.current)
        // кража меню стартует вместе с разворотом: отложенный таймер мог
        // отмениться сворачиванием от реального mouseleave
        hoverTimerRef.current = setTimeout(() => {
            setExpanded(true)
            sendAction('NOTCH_MENU_OPEN_NATIVE')
        }, 150)
    }, [])
    const onPillMouseLeave = useCallback(() => {
        clearTimeout(hoverTimerRef.current)
    }, [])

    // Окно нотча нефокусируемо: на время ввода main делает его key-окном,
    // иначе клавиатура до поля не доходит. Закрытие всегда возвращает как было.
    const openSearch = useCallback(() => {
        // фокус-смена синтезирует mouseleave: могли успеть запланировать
        // сворачивание ДО клика — гасим таймер, поиск панель держит
        clearTimeout(leaveTimerRef.current)
        searchOpenRef.current = true
        setSearchOpen(true)
        window.desktopEvents?.send('NOTCHPLAYER_SEARCH_MODE', true)
    }, [])
    const closeSearch = useCallback(() => {
        searchOpenRef.current = false
        setSearchOpen(false)
        setQuery('')
        window.desktopEvents?.send('NOTCHPLAYER_SEARCH_MODE', false)
    }, [])

    // Фокус в поле: окно получает key-статус асинхронно после IPC — ловим
    // его focus-событие и дожимаем фокус ещё раз по таймеру
    useEffect(() => {
        if (!searchOpen) return undefined
        const focusInput = () => searchInputRef.current?.focus()
        focusInput()
        window.addEventListener('focus', focusInput)
        const retry = setTimeout(focusInput, 150)
        return () => {
            window.removeEventListener('focus', focusInput)
            clearTimeout(retry)
        }
    }, [searchOpen])

    // Клик мимо окна снимает key-статус — считаем это отменой поиска.
    // Mouseleave к этому моменту уже не придёт (курсор давно за окном и уход
    // был проглочен гардом поиска), поэтому сворачиваем панель и возвращаем
    // клик-сквозь сами — иначе панель висит открытой и держит события
    useEffect(() => {
        if (!searchOpen) return undefined
        const onBlur = () => {
            closeSearch()
            setExpanded(false)
            window.desktopEvents?.send('NOTCHPLAYER_SET_MOUSE_EVENTS', false)
        }
        window.addEventListener('blur', onBlur)
        return () => window.removeEventListener('blur', onBlur)
    }, [searchOpen, closeSearch])

    const onSearchKeyDown = e => {
        if (e.key === 'Enter') {
            const q = query.trim()
            if (!q) return
            // как переходы по ссылкам шапки: уходим в основное окно — сворачиваемся
            setExpanded(false)
            closeSearch()
            sendAction('NOTCH_SEARCH_QUERY', q)
        } else if (e.key === 'Escape') {
            closeSearch()
        }
    }

    useEffect(
        () => () => {
            clearTimeout(hoverTimerRef.current)
            clearTimeout(leaveTimerRef.current)
            clearTimeout(volumeHudTimerRef.current)
        },
        [],
    )

    // main подгоняет размер окна под форму: область ховера не шире видимого.
    // Сворачивание отпраляем по факту конца CSS-морфа: ранний снап обрезает капсулу
    useEffect(() => {
        if (expanded) {
            window.desktopEvents?.send('NOTCHPLAYER_EXPANDED', true)
            return
        }
        expandCooldownUntilRef.current = Math.max(expandCooldownUntilRef.current, Date.now() + 1100)
        let done = false
        const finish = () => {
            if (done) return
            done = true
            window.desktopEvents?.send('NOTCHPLAYER_EXPANDED', false)
        }
        const pill = document.querySelector('.Notch_pill')
        pill?.addEventListener('transitionend', finish, { once: true })
        const fallback = setTimeout(finish, 900)
        return () => clearTimeout(fallback)
    }, [expanded])

    const track = playerState?.track
    const isPlaying = playerState?.isPlaying === true
    const actions = playerState?.actionsStore ?? {}

    const cover = useMemo(() => getCoverUrls(track?.coverUri), [track?.coverUri])
    const title = track?.title ?? ''
    const artists = useMemo(
        () =>
            (track?.artists ?? [])
                .map(a => (typeof a === 'string' ? { id: null, name: a } : { id: a?.id ?? null, name: a?.title ?? a?.name }))
                .filter(a => a.name),
        [track?.artists],
    )
    // Признак 18+ (ExplicitModel: contentWarning 'explicit'|'clean')
    const isExplicit = track?.contentWarning === 'explicit' || track?.isExplicit === true

    useEffect(() => {
        if (Number.isFinite(playerState?.volume)) volumeRef.current = playerState.volume
    }, [playerState?.volume])

    // колесо над артом — громкость плеера (шаг крупнее мини-плеерного)
    const onCoverWheel = e => {
        e.preventDefault()
        e.stopPropagation()
        const step = e.deltaY < 0 ? 0.0125 : -0.0125
        const next = Math.min(1, Math.max(0, (volumeRef.current ?? 0.5) + step))
        volumeRef.current = next
        sendAction('SET_VOLUME', next)
        setVolumeHud(next)
        clearTimeout(volumeHudTimerRef.current)
        volumeHudTimerRef.current = setTimeout(() => setVolumeHud(null), 800)
    }

    const openInMainWindow = action => {
        setExpanded(false)
        sendAction(action.name, action.value)
    }

    useEffect(() => {
        if (!openSub) {
            setSubSpinExpired(false);
            return undefined;
        }
        setSubSpinExpired(false);
        const openedAt = Date.now();
        const t = setInterval(() => setSubSpinExpired(Date.now() - openedAt > 5000), 1000);
        return () => clearInterval(t);
    }, [openSub])

    const toggleMenu = () => {
        if (menuOpen) {
            setMenuOpen(false)
            menuOpenRef.current = false
            setOpenSub(null)
            sendAction('NOTCH_MENU_DISMISS')
            return
        }
        setMenuOpen(true)
        menuOpenRef.current = true
        menuOpenedAtRef.current = Date.now()
        // список обычно уже украден предзагрузкой при развороте капсулы
        if (!menuItems) sendAction('NOTCH_MENU_OPEN_NATIVE')
    }

    const onMenuItem = (item, parentLabel = null) => {
        // родитель сабменю раскрывается сразу, даже пока список крадётся
        if (item.hasPopup && !parentLabel) {
            setOpenSub(prev => (prev === item.label ? null : item.label))
            return
        }
        setMenuOpen(false)
        menuOpenRef.current = false
        setOpenSub(null)
        // чекбоксы и вложенные пункты исполняются скрыто — капсула остаётся;
        // верхнеуровневые открывают основное окно — сворачиваемся
        if (item.kind === 'toggle' || parentLabel) {
            sendAction('NOTCH_MENU_ITEM', { label: item.label, kind: item.kind, parent: parentLabel ?? undefined })
        } else {
            setExpanded(false)
            sendAction('NOTCH_MENU_ITEM', { label: item.label, kind: item.kind, parent: undefined })
        }
    }

    if (!ready) return null

    // при открытом меню корень расширяется до окна: реальные клики по пунктам
    // должны попадать в окно, а mouseleave корня закрывает меню
    const rootClass = [
        'Notch_root',
        `Notch_root_${MODE}`,
        expanded ? 'Notch_root_expanded' : '',
        menuOpen ? 'Notch_root_menu' : '',
        searchOpen ? 'Notch_root_search' : '',
    ]
        .filter(Boolean)
        .join(' ')

    return (
        <div className={rootClass} style={{ '--pill-h': `${PILL_HEIGHT}px` }} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {/* Пасхалка: клик-зона за физическим вырезом, текст прозрачный (жёлтый при ховере) */}
            <button
                type="button"
                className="Notch_openMainLink"
                onClick={() => window.desktopEvents?.send('SHOW_MAIN_WINDOW')}
            >
                открыть YM
            </button>
            {/* Капсула — морфящаяся форма; панель клипается ею при сжатии */}
            <div className="Notch_pill" onMouseEnter={onPillMouseEnter} onMouseLeave={onPillMouseLeave}>
                {/* Свёрнуто: обложка слева, эквалайзер справа */}
                <div className="Notch_pillInner">
                    <div className="Notch_pillCover" onWheel={onCoverWheel}>
                        {cover ? <img src={cover.src} srcSet={cover.srcSet} alt="" draggable={false} /> : null}
                        {volumeHud !== null && (
                            <div className="Notch_volumeHud" style={{ '--vol': volumeHud }}>
                                <div className="Notch_volumeFill" />
                                <Icon name={volumeHud > 0 ? 'volume_xs' : 'volumeOff_xs'} size={18} className="Notch_volumeIcon" />
                            </div>
                        )}
                    </div>
                    <Equalizer isPlaying={isPlaying} />
                </div>

                {/* Пин: как у мини-плеера — держит развёрнутую панель поверх всего */}
                <button
                    type="button"
                    aria-label={pinned ? 'Открепить' : 'Закрепить'}
                    title={pinned ? 'Открепить' : 'Закрепить поверх всего'}
                    className={'Notch_pinButton' + (pinned ? ' Notch_pinButton_active' : '')}
                    onClick={() => setPinned(p => !p)}
                >
                    <Icon name={pinned ? 'pin_filled_xs' : 'pin_xs'} size={13} />
                </button>

                {/* Лупа: разворачивает поле поиска в верхней полосе; повторный клик — свернуть */}
                <button
                    type="button"
                    aria-label={searchOpen ? 'Свернуть поиск' : 'Поиск'}
                    title={searchOpen ? 'Свернуть поиск' : 'Поиск'}
                    className="Notch_searchButton"
                    onClick={() => (searchOpen ? closeSearch() : openSearch())}
                >
                    <Icon name="search_xs" size={13} />
                </button>

                {/* Вспышка лайка/дизлайка поверх капсулы */}
                {flash && (
                    <div className={'Notch_flash' + (flash === 'dislike' || flash === 'undislike' ? ' Notch_flash_dislike' : '') + (flash === 'unlike' ? ' Notch_flash_unlike' : '')}>
                        <div className="Notch_flashHeart">
                            {flash === 'unlike' ? (
                                /* снятие: закрашенное сердце тает до рамки, рамка уходит в прозрачность */
                                <>
                                    <span className="Notch_flashOutline">
                                        <Icon name="like_xs" size={22} />
                                    </span>
                                    <span className="Notch_flashFill">
                                        <Icon name="liked_xs" size={22} />
                                    </span>
                                </>
                            ) : flash === 'dislike' || flash === 'undislike' ? (
                                <>
                                    <span className="Notch_flashHalf Notch_flashHalf_left">
                                        <Icon name="liked_xs" size={22} />
                                    </span>
                                    <span className="Notch_flashHalf Notch_flashHalf_right">
                                        <Icon name="liked_xs" size={22} />
                                    </span>
                                </>
                            ) : (
                                <Icon name="liked_xs" size={22} />
                            )}
                        </div>
                    </div>
                )}

                {/* Развёрнутая панель */}
                <div className="Notch_panel">
                    {/* Поиск: строка на уровне ковера/названия, между угловыми кнопками.
                        Физический вырез камеры съедает верхнюю полосу — держим ниже */}
                    {searchOpen && (
                        <div className="Notch_searchBar">
                            <input
                                ref={searchInputRef}
                                className="Notch_searchInput"
                                type="text"
                                value={query}
                                placeholder="Поиск"
                                spellCheck={false}
                                autoComplete="off"
                                onChange={e => setQuery(e.target.value)}
                                onKeyDown={onSearchKeyDown}
                            />
                            {query && (
                                <button
                                    type="button"
                                    aria-label="Очистить"
                                    className="Notch_searchClear"
                                    onClick={() => {
                                        setQuery('')
                                        searchInputRef.current?.focus()
                                    }}
                                >
                                    <Icon name="close_xs" size={12} />
                                </button>
                            )}
                        </div>
                    )}
                    <div className="Notch_panelHeader">
                        <div className="Notch_cover" onWheel={onCoverWheel}>
                            {cover ? <img src={cover.src} srcSet={cover.srcSet} alt="" draggable={false} /> : <Icon name="album_xxs" size={28} />}
                            {volumeHud !== null && (
                                <div className="Notch_volumeHud" style={{ '--vol': volumeHud }}>
                                    <div className="Notch_volumeFill" />
                                    <Icon name={volumeHud > 0 ? 'volume_xs' : 'volumeOff_xs'} size={24} className="Notch_volumeIcon" />
                                </div>
                            )}
                        </div>
                        <div className="Notch_meta">
                            <div className="Notch_metaTitle">
                                <button
                                    type="button"
                                    className="Notch_titleLink"
                                    title={title || 'Ничего не играет'}
                                    onClick={() => openInMainWindow({ name: 'NOTCH_MENU_OPEN_TRACK' })}
                                >
                                    {title || 'Ничего не играет'}
                                </button>
                                {isExplicit && <span className="Notch_explicit">18+</span>}
                                {/* Полное меню трека — воруем из приложения и рисуем в нотче */}
                                <NotchButton label="Меню трека" onClick={toggleMenu} className="Notch_menuButton">
                                    <Icon name="more_xs" size={18} />
                                </NotchButton>
                            </div>
                            <div className="Notch_metaSubtitle">
                                {artists.map((a, i) => (
                                    <span key={`${a.name}-${i}`}>
                                        {i > 0 && ', '}
                                        {a.id ? (
                                            <button
                                                type="button"
                                                className="Notch_artistLink"
                                                onClick={() => openInMainWindow({ name: 'NOTCH_MENU_OPEN_ARTIST', value: a.id })}
                                            >
                                                {a.name}
                                            </button>
                                        ) : (
                                            a.name
                                        )}
                                    </span>
                                ))}
                            </div>
                        </div>
                        {/* Дрыгалка — максимально справа; весь текст между артом и ней */}
                        <Equalizer isPlaying={isPlaying} large />
                    </div>

                    <ProgressBar
                        durationMs={track?.durationMs}
                        progress={playerState?.progress ?? 0}
                        timestamp={playerState?.timestamp ?? 0}
                        isPlaying={isPlaying}
                        alwaysTimestamps={alwaysTimestamps}
                    />

                    <div className="Notch_controls">
                        <div className="Notch_controlsSide">
                            <NotchButton
                                label="Не нравится"
                                onClick={() => sendAction('TOGGLE_DISLIKE')}
                                className={actions.isDisliked ? 'Notch_button_active' : ''}
                            >
                                <Icon name={actions.isDisliked ? 'disliked_xs' : 'dislike_xs'} size={20} />
                            </NotchButton>
                            {showShuffleRepeat && (
                                <NotchButton
                                    label="Перемешать"
                                    onClick={() => sendAction('TOGGLE_SHUFFLE')}
                                    className={actions.shuffle ? 'Notch_button_active' : 'Notch_button_dim'}
                                >
                                    <Icon name="shuffle_xxs" size={20} />
                                </NotchButton>
                            )}
                        </div>

                        <div className="Notch_controlsMain">
                            <NotchButton label="Предыдущий" onClick={() => sendAction('MOVE_BACKWARD')}>
                                <Icon name="previous_xxs" size={22} />
                            </NotchButton>
                            <NotchButton label="Play" onClick={() => sendAction('TOGGLE_PLAY')} className="Notch_playButton">
                                <Icon name={isPlaying ? 'pause_filled_l' : 'play_filled_l'} size={30} />
                            </NotchButton>
                            <NotchButton label="Следующий" onClick={() => sendAction('MOVE_FORWARD')}>
                                <Icon name="next_xxs" size={22} />
                            </NotchButton>
                        </div>

                        <div className="Notch_controlsSide">
                            {showShuffleRepeat && (
                                <NotchButton
                                    label="Повтор"
                                    onClick={() => sendAction('TOGGLE_REPEAT')}
                                    className={actions.repeat && actions.repeat !== 'none' ? 'Notch_button_active' : 'Notch_button_dim'}
                                >
                                    {/* повтор: none → context → one */}
                                    <Icon name={actions.repeat === 'one' ? 'repeat_one_xxs' : 'repeat_xxs'} size={20} />
                                </NotchButton>
                            )}
                            <NotchButton
                                label="Нравится"
                                onClick={() => sendAction('TOGGLE_LIKE')}
                                className={actions.isLiked ? 'Notch_button_active' : ''}
                            >
                                <Icon name={actions.isLiked ? 'liked_xs' : 'like_xs'} size={20} />
                            </NotchButton>
                        </div>
                    </div>
                </div>
            </div>

            {/* Краденое меню — оверлей ниже капсулы; список догружается на глазах */}
            {menuOpen && !menuItems && (
                <ul className="Notch_menuList">
                    <li>
                        <span className="Notch_menuLoading">Загрузка…</span>
                    </li>
                </ul>
            )}
            {menuOpen && menuItems && (
                <ul className="Notch_menuList">
                    {menuItems.map(item => {
                        const checked =
                            item.toggle === 'like'
                                ? actions.isLiked === true
                                : item.toggle === 'dislike'
                                  ? actions.isDisliked === true
                                  : false
                        const subOpen = openSub === item.label
                        return (
                            <li key={item.label}>
                                <button
                                    type="button"
                                    className={'Notch_menuItem' + (item.disabled ? ' Notch_menuItem_disabled' : '')}
                                    disabled={item.disabled}
                                    onClick={() => onMenuItem(item)}
                                >
                                    <span className="Notch_menuItemIcon">{item.icon ? <Icon name={item.icon} size={16} /> : null}</span>
                                    <span className="Notch_menuItemLabel">{item.label}</span>
                                    {item.toggle && checked ? <span className="Notch_menuItemChecked">✓</span> : null}
                                    {item.hasPopup ? <span className="Notch_menuItemArrow">{subOpen ? '▾' : '▸'}</span> : null}
                                </button>
                                {subOpen && ((item.loading && !subSpinExpired) || !item.children?.length ? (
                                    <ul className="Notch_menuSubList">
                                        {item.children?.length ? (
                                            item.children.map(child => (
                                                <li key={child.label}>
                                                    <button
                                                        type="button"
                                                        className="Notch_menuItem Notch_menuItem_sub"
                                                        onClick={() => onMenuItem(child, item.label)}
                                                    >
                                                        <span className="Notch_menuItemIcon">{child.icon ? <Icon name={child.icon} size={15} /> : null}</span>
                                                        <span className="Notch_menuItemLabel">{child.label}</span>
                                                    </button>
                                                </li>
                                            ))
                                        ) : null}
                                        <li>
                                            <span className="Notch_menuLoading">Загрузка…</span>
                                        </li>
                                    </ul>
                                ) : (
                                    <ul className="Notch_menuSubList">
                                        {item.children.map(child => (
                                            <li key={child.label}>
                                                <button
                                                    type="button"
                                                    className="Notch_menuItem Notch_menuItem_sub"
                                                    onClick={() => onMenuItem(child, item.label)}
                                                >
                                                    <span className="Notch_menuItemIcon">{child.icon ? <Icon name={child.icon} size={15} /> : null}</span>
                                                    <span className="Notch_menuItemLabel">{child.label}</span>
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                ))}
                            </li>
                        )
                    })}
                </ul>
            )}
        </div>
    )
}

export default NotchApp

import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')).render(<NotchApp />)
