import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from "./context"
import sublinks from "./data"
import "./styles/sidebar.css"

function Sidebar() {
    const { showSidebar, closeSideBar } = useGlobalContext();
    return (
        <article className={`${showSidebar ? 'modal-container show-modal' : 'modal-container'}`} >
            <div className="modal">
                <button type="button" className="modal-title" onClick={closeSideBar} >
                    <FaTimes />
                </button>
                <div className="modal-body">
                    {sublinks.map(({ page, links }, index) => {
                        return <div className="page" key={index}>
                            <h4 className="title">{page}</h4>
                            <div className="links">
                                {
                                    links.map(({ label, icon, url }, index) => {
                                        return <a key={index} href={url}><span>{icon}</span> {label}</a>
                                    })
                                }
                            </div>

                        </div>
                    })}
                </div>
            </div>
        </article>
    )
}
export default Sidebar