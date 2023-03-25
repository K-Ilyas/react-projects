import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"

import Home from "./pages/Home"
import Error from "./pages/Error"
import Main from "./components/Main"
import About from "./pages/About"
import GlobalProvider from "./context"
import Cocktail from "./pages/Cocktail"



function App() {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route>
                <Route path="/" element={<Main />}>
                    <Route index element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="cocktail/:id" element={<Cocktail />} />
                    <Route path="*" element={<Error />} />
                </Route>
            </Route>
        )
    )


    return (
        <GlobalProvider>
            <RouterProvider router={router} />
        </GlobalProvider>
    )
}
export default App