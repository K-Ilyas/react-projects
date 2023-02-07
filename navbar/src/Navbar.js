import { useEffect, useRef, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from './data'
import logo from './logo.svg'
import './style/navbar.css'

function Navbar() {
    const [isShow, setIsShow] = useState(false);
    const linksConatiner = useRef(null);
    const LinksRef = useRef(null);


    useEffect(() => {
        const linksHeight = LinksRef.current.getBoundingClientRect().height;
        if (isShow) {
            linksConatiner.current.style.height = `${linksHeight}px`
        } else {
            linksConatiner.current.style.height = `0px`
        }
    }, [isShow])
    return (
        <nav>
            <div className="logo">
                <img src={logo} alt="logo" />
                <button type="button" id="hamborger" onClick={() => setIsShow(!isShow)}>
                    <FaBars />
                </button>
            </div>
            <div className="links" ref={linksConatiner}>
                <ul ref={LinksRef}>
                    {links.map(({ id, url, text }) => (
                        <li key={id}><a href={url} alt={text}>{text}</a></li>
                    ))}</ul>
            </div>

            <ul className="social">
                {social.map(({ id, url, icon }) => (
                    <li key={id}><a href={url} alt={url}>{icon}</a></li>
                ))}

            </ul>
        </nav>
    )
}
export default Navbar