import { Link } from "react-router-dom"
import "../styles/error.css"

function Error() {
    return (
        <div className="error">
            <h1>Oops! It's A Dead End</h1>
            <Link to="/" className="link">BACK HOME</Link>
        </div>
    )
}
export default Error