import { createContext, useCallback, useContext, useEffect, useState } from "react"


const GlobalContext = createContext();

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

// create the globalContext
function GlobalProvider({ children }) {
    const [isLoading, setIsLoading] = useState(false);
    const [cocktail, setCocktail] = useState("");
    const [cocktails, setCocktails] = useState([]);

    const fecthCocktails = useCallback(async () => {
        setIsLoading(true)
        try {
            const response = await fetch(`${url}${cocktail.trim()}`);
            const data = await response.json();
            const { drinks } = data
            if (response.ok && drinks) {
                setCocktails([...drinks.map((item) => {
                    const {
                        idDrink: id,
                        strDrink: name,
                        strDrinkThumb: image,
                        strAlcoholic: info,
                        strGlass: glass,
                    } = item
                    return {
                        id,
                        name,
                        image,
                        info,
                        glass,
                    }
                })])
            }
            else {
                setCocktails([])
            }
        }
        catch (e) {
            console.log(e);
        }
        finally {
            setIsLoading(false)
        }

    }, [cocktail])

    useEffect(() => {
        fecthCocktails();
    }, [cocktail, fecthCocktails])
    return (
        <GlobalContext.Provider value={{ setCocktail, cocktails, isLoading, cocktail }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext);
}

export default GlobalProvider