import { Link } from "react-router-dom"
import "../styles/cocktail.css"


function Cocktail({ id,
    name,
    image,
    info,
    glass, }) {
    return (
        <article className="card" >
            <img className="avatar" src={image} alt={name} />
            <div className="body">
                <h2 className="title">{name}</h2>
                <p className="glass">{glass}</p>
                <p className="info">{info}</p>
                <Link to={`cocktail/${id}`} className="link">Details</Link>
            </div>
        </article>
    )
}
export default Cocktail