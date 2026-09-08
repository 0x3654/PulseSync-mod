import TitleBarButton from '../../ui/TitleBarButton/TitleBarButton.jsx'

import './TitleBar.css'

const isMacOS = navigator.userAgent.includes('Macintosh')

export default function TitleBar() {
    return (
        // macOS: нативный светофор слева (hiddenInset), крестик не нужен
        <header className={isMacOS ? 'TitleBar TitleBar_macOS' : 'TitleBar'}>
            <div className="TitleBar_button_container">
                <TitleBarButton variant="pin" />
                {!isMacOS && <TitleBarButton variant="quit" />}
            </div>
        </header>
    )
}
