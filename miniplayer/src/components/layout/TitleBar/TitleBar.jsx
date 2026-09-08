import TitleBarButton from '../../ui/TitleBarButton/TitleBarButton.jsx'

import './TitleBar.css'

const isMacOS = navigator.userAgent.includes('Macintosh')

export default function TitleBar() {
    return (
        <header className={isMacOS ? 'TitleBar TitleBar_macOS' : 'TitleBar'}>
            {isMacOS && (
                <button type="button" className="TitleBar_macOS_CloseButton" aria-label="close" onClick={() => window.close()}>
                    <svg width="8" height="8" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M1.06065 0.353555C0.86539 0.158292 0.548808 0.158292 0.353546 0.353555C0.158294 0.548817 0.158294 0.8654 0.353546 1.06066L3.29289 4L0.353546 6.93934C0.158294 7.1346 0.158294 7.45118 0.353546 7.64645C0.548808 7.84171 0.86539 7.84171 1.06065 7.64645L4 4.70711L6.93934 7.64645C7.1346 7.84171 7.45118 7.84171 7.64645 7.64645C7.8417 7.45118 7.8417 7.1346 7.64645 6.93934L4.70711 4L7.64645 1.06066C7.8417 0.8654 7.8417 0.548817 7.64645 0.353555C7.45118 0.158292 7.1346 0.158292 6.93934 0.353555L4 3.29289L1.06065 0.353555Z"
                            fill="#7d0a0a"
                        />
                    </svg>
                </button>
            )}
            <div className="TitleBar_button_container">
                <TitleBarButton variant="pin" />
                {!isMacOS && <TitleBarButton variant="quit" />}
            </div>
        </header>
    )
}
