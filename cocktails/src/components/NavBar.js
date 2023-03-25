import { Link } from 'react-router-dom'
import logo from '../logo.svg'
import "../styles/navbar.css"
function NavBar() {
    return (
        <nav className="navbar">
            <div className='nav-center'>
                <Link to="/"><img src={logo} alt="cocktail logo" className="logo" /></Link>
                <div className="links">
                    <Link to="/" className="link">Home</Link>
                    <Link to="/about" className="link">About</Link>
                </div>
            </div>
        </nav>
    )
}
export default NavBar