import Hero from "./Hero"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import SubMenu from "./SubMenu"

function App(props) {
    return (
        <main>
            <Navbar />
            <Sidebar />
            <SubMenu />
            <Hero />
        </main>
    )
}

export default App