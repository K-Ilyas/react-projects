import CocktailsContainer from "../components/CocktailsContainer"
import Search from "../components/Search"

function Home() {
    return (
        <section className="conatiner">
            <Search />
            <CocktailsContainer />
        </section>
    )
}
export default Home