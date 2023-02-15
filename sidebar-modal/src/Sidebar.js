import logo from "./logo.svg"
import { FaTimes } from 'react-icons/fa';
import "./style/sidebar.css"
import { links, social } from "./data"
import { useCustomContexte } from "./context";

function Sidebar() {
    const { showSidebar, handleSidebar } = useCustomContexte();

    return (
        <aside className={`${showSidebar ? 'sidebar show-sidebar' : 'sidebar'}`} >
            <div className="header">
                <img src={logo} alt="logo" className="logo" />
                <button type="button" className="sidebar-close" onClick={handleSidebar}>
                    <FaTimes />
                </button>
            </div>
            <ul className="links">
                {links.map(({ id, url, icon, text }) => {
                    return <li key={id}><a href={url}>{icon} <span>{text}</span></a></li>
                })}
            </ul>
            <ul className="social">
                {social.map(({ id, url, icon }) =>
                    <li key={id}><a href={url} >{icon}</a></li>
                )}
            </ul>
        </aside>
    )
}
export default Sidebar