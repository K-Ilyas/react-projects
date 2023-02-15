import { FaBars } from 'react-icons/fa';
import "./style/home.css"
import { useCustomContexte } from './context';
function Home() {
    const { handleModal, handleSidebar } = useCustomContexte();
    return (
        <article className="home">
            <button type="button" className="btn-sidebar" onClick={handleSidebar}><FaBars /></button>
            <button type="button" className="btn-modal" onClick={handleModal}>show modal</button>
        </article>
    )
}
export default Home