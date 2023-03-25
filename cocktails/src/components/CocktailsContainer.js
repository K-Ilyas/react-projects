import { useGlobalContext } from "../context"
import "../styles/cocktails.css"
import Cocktail from "./Cocktail";
import Loader from "./Loader"

function CocktailsContainer() {

    const { cocktails, isLoading } = useGlobalContext();

    if (isLoading) {
        return <Loader />
    }
    if (cocktails.length === 0) {
        return (<h3 className="warning">
            No Cocktails Matched Your Search Criteria
        </h3>)
    }
    return (
        <section className="cocktails">

            <h1>Cocktails</h1>

            <div className="container">
                {cocktails.map(item => <Cocktail key={item.id} {...item} />)}
            </div>

        </section>
    )
}
export default CocktailsContainer