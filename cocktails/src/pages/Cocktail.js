import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import Loader from "../components/Loader";
import "../styles/cocktail_page.css"

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

function Cocktail() {
    const { id } = useParams();

    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState("");
    // const { setCocktail } = useGlobalContext();
    useEffect(() => {
        const fecthData = async () => {
            setIsLoading(true)
            try {
                const response = await fetch(`${url}${id}`);
                const data = await response.json();
                const { drinks } = data
                if (response.ok && drinks) {
                    const {
                        strDrink: name,
                        strDrinkThumb: image,
                        strAlcoholic: info,
                        strCategory: category,
                        strGlass: glass,
                        strInstructions: instructions,
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5,
                    } = data.drinks[0]

                    setData(
                        {
                            name,
                            image,
                            info,
                            category,
                            glass,
                            instructions,
                            ingredients: [
                                strIngredient1,
                                strIngredient2,
                                strIngredient3,
                                strIngredient4,
                                strIngredient5,
                            ],
                        })
                }
                else {
                    setData("")
                }
            }
            catch (e) {
                console.log(e);
            }
            finally {
                setIsLoading(false)
            }
        }
        fecthData()
    }, [id]);
    if (isLoading) {
        return <Loader />
    }
    if (!data) {
        return <h2 className='warning'>no cocktail to display</h2>
    }
    const { name, image, instructions, info, glass, category, ingredients } = data;
    return (
        <article className="describe-cocktail">
            <Link to="/" className="link" >BACK HOME</Link>
            <h1 className="name">{name}</h1>
            <div className="description">
                <div className="avatar">
                    <img src={image} alt={name} />
                </div>
                <div className="info">
                    <p>
                        <span className="data">
                            Name :
                        </span> {name}
                    </p>
                    <p>
                        <span className="data">
                            Category :
                        </span> {category}
                    </p>

                    <p>
                        <span className="data">
                            Info :
                        </span> {info}
                    </p>
                    <p>
                        <span className="data">
                            Glass :
                        </span> {glass}
                    </p>
                    <p>
                        <span className="data">
                            Instructons :
                        </span> {instructions}
                    </p>
                    <p>
                        <span className="data">
                            Ingredients :
                        </span>
                        {" "} {ingredients.map((e, index) => e !== null && <span key={index}>{e} </span>)}
                    </p>

                </div>
            </div>
        </article>
    )
}
export default Cocktail