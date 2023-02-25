import "./styles/navbar.css"
import { FaBars } from "react-icons/fa"
import logo from "./images/logo.svg"
import sublinks from "./data"
import { useGlobalContext } from "./context"


function Navbar() {
    const { openSideBar, openSubMenu, closeSubMenu } = useGlobalContext();
    const hnadleShowSubMenu = (e) => {
        e.stopPropagation();
        const page = e.target.textContent;
        const coordinates = e.target.getBoundingClientRect();
        openSubMenu(page, coordinates);
    }
    const handleCloseSubMenu = (e) => {
        const page = e.target.textContent;
        if (!sublinks.find((e) => e.page === page)) {
            closeSubMenu();
        }
    }

    return (
        <nav className="navbar" onMouseOver={handleCloseSubMenu}>
            <div className="header">
                <img src={logo} alt="logo" />
                <button type="button" onClick={openSideBar}><FaBars /></button>
            </div>
            <ul className="pages">
                {sublinks.map(({ page }, index) => {
                    return <li key={index} onMouseOver={hnadleShowSubMenu}>
                        {page}
                    </li>
                })}
            </ul>
            <button type="button" id="sign-in">
                Sign in
            </button>
        </nav>
    )
}
export default Navbar