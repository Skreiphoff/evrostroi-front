import '../css/Header.css'
import '../css/main.css'

function MiniHeader() {
    return (
        <div className="header-info">
            <div className="container">
                <ul className="info-list">
                    <li className="info-item">
                        <span className="info-link" >Калач-на-Дону</span>
                    </li>
                    <li className="info-item">
                        <a className="info-link" href="tel:+79093841381">+7 (909) 384-13-81</a>
                    </li>
                    <li className="info-item">
                        <span className="info-link">Адрес</span>
                    </li>
                    <li className="info-item">
                        <span className="info-link">Для бизнеса</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default MiniHeader
