import { FaTimes } from 'react-icons/fa';
import { useCustomContexte } from './context';
import "./style/modal.css"

function Modal() {
    const { showModal, handleModal } = useCustomContexte();

    return (
        <article className={`${showModal ? 'modal-container show-modal' : 'modal-container'}`} >
            <div className="modal">
                <button type="button" className="modal-title" onClick={handleModal} >
                    <FaTimes />
                </button>
                <div className="modal-body">
                    Modal Content
                </div>
            </div>
        </article>
    )
}
export default Modal