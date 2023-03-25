import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"

function Main() {
    return (
        <>
            <NavBar />
            <main>
                <Outlet />
            </main>
        </>
    )
}
export default Main