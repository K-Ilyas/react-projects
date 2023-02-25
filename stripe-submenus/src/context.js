import { createContext, useContext, useState } from "react"
import sublinks from "./data";

const GlobalContext = createContext();

function AppContext({ children }) {
  const [showSidebar, setShowSideBar] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [link, setLink] = useState({ page: "", links: "", left: "", right: "", bottom: "" });
  const openSideBar = () => {
    setShowSideBar(true);
  }
  const closeSideBar = () => {
    setShowSideBar(false);
  }
  const openSubMenu = (page, { left, right, bottom }) => {
    // find the specific page 
    const name = sublinks.find((e) => e.page === page);
    setLink({ ...name, left, right, bottom });
    setShowSubMenu(true);
  }
  const closeSubMenu = () => {
    setShowSubMenu(false);
  }
  return (
    <GlobalContext.Provider value={{ showSidebar, showSubMenu, openSideBar, closeSideBar, openSubMenu, closeSubMenu, link }}>
      {children}
    </GlobalContext.Provider>
  )
}



// define custom hook :

export function useGlobalContext() {
  return useContext(GlobalContext);
}

export default AppContext