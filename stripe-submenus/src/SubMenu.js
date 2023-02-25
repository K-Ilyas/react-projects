import "./styles/submenu.css"
import { useGlobalContext } from "./context"
import { useEffect, useRef, useState } from "react";

function SubMenu() {
    const sidebar = useRef();
    const { link, showSubMenu } = useGlobalContext();
    const [menuWidth, setWidthMenu] = useState('col-2')
    useEffect(() => {
        const { left, right, bottom, links } = link;
        if (showSubMenu) {
            sidebar.current.style.left = `${(left + right) / 2}px`;
            sidebar.current.style.top = `${bottom + 8}px`
        }
        if (links.length <= 2)
            setWidthMenu("col-2")
        else if (links.length === 3)
            setWidthMenu("col-3")
        else if (links.length > 3)
            setWidthMenu("col-4")
    }, [link, showSubMenu]);
    return (
        <div className={`${showSubMenu ? 'submenu show-submenu' : 'submenu'}`} ref={sidebar}>
            <h4 className="title">{link.page}</h4>
            <div className={`links ${menuWidth}`}>
                {
                    link.links && link.links.map(({ label, icon, url }, index) => {
                        return <a key={index} href={url}><span>{icon}</span> {label}</a>
                    })
                }
            </div>
        </div>
    )
}
export default SubMenu