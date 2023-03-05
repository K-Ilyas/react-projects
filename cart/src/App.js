import CartContainer from "./CartContainer"
import Navbar from "./Navbar"
import { useGlobalContext } from "./context"
function App() {
    const { loading } = useGlobalContext();
    if (loading) {
        return <div className="loading">
            <p>Loading ...</p>
        </div>
    }
    return (
        <main>
            <Navbar />
            <CartContainer />
        </main>
    )
}
export default App