import { createContext, useContext, useState } from "react"

export const AppContext = createContext();

function GlobalContext({ children }) {

    const [showModal, setShowModal] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);
    const handleModal = () => {
        setShowModal(!showModal);
    }
    const handleSidebar = () => {
        setShowSidebar(!showSidebar);
    }

    return (
        <AppContext.Provider value={{ showModal, showSidebar, handleModal, handleSidebar }}>
            {children}
        </AppContext.Provider>
    )
}

export const useCustomContexte = () => {
    return useContext(AppContext);
}

export default GlobalContext