import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./reducers/reducer";

const GlobalContext = createContext();

const url = 'https://course-api.com/react-useReducer-cart-project'

const initialState = {
    loading: false,
    cart: [],
    total: 0,
    amount: 0
}


function GlobalProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const clearCart = () => {
        dispatch({ type: "CLEAR" })
    }
    const removeItem = (id) => {
        dispatch({ type: "REMOVE", payload: id })
    }
    const toggleIncDec = (type, id) => {
        dispatch({ type: "TOGGLE", payload: { id, type } })
    }
    const fetchData = async () => {
        dispatch({ type: "LOADING" })
        try {
            const respnse = await fetch(url);
            const data = await respnse.json();
            dispatch({ type: "LOAD_DATA", payload: data })
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    useEffect(() => {
        dispatch({ type: "TOTALS" })
    }, [state.cart])
    return (
        <GlobalContext.Provider value={{ ...state, clearCart, removeItem, toggleIncDec }}>
            {children}
        </GlobalContext.Provider>
    )
}


// create custon hooks
export function useGlobalContext() {
    return useContext(GlobalContext);
}


export default GlobalProvider