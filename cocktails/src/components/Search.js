import { useEffect, useRef } from "react"
import { useGlobalContext } from "../context"
import "../styles/form.css"

function Search() {
    const { setCocktail, cocktail } = useGlobalContext()

    const ref = useRef(null)

    const handleChange = () => {
        setCocktail(ref.current.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    // the first rendering 
    useEffect(() => {
        ref.current.focus()
    }, [])

    useEffect(() => {
        if (cocktail !== "")
            ref.current.value = cocktail;
    }, [cocktail])

    return (
        <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="name">Search Your Favorite Cocktail</label>
            <input type="text" name="name" id="name" ref={ref} onChange={handleChange} />
        </form>
    )
}
export default Search