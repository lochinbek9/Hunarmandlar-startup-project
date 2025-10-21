import "./Navbar.css"

function Navbar() {
    return (
        <div className="container">
            <nav className="header__navbar">
                <a href="#">
                    <img src="./img/logo.svg" alt="logo" />
                </a>
                <div className="header__navbar__box">
                    <img src="./img/search-icon.svg" width="20" height="20" alt="" />
                    <select>
                        <option value="en">UZ</option>
                        <option value="es">ES</option>
                        <option value="fr">FR</option>
                    </select>
                </div>
            </nav>
        </div>
    )
}

export default Navbar