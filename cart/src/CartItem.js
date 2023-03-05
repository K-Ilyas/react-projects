import PropTypes from "prop-types"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"
import "./styles/cart.css"
import { useGlobalContext } from "./context"

function CartItem({ id, title, img, price, amount }) {

    const { removeItem, toggleIncDec } = useGlobalContext();
    return (
        <article className="item">
            <div className="left">
                <img src={img} alt={title} />
                <div className="item-info">
                    <p className="title">{title}</p>
                    <p className="price">${price}</p>
                    <button type="button" onClick={() => removeItem(id)}>remove</button>
                </div>
            </div>
            <div className="right">
                <button type="button" onClick={() => toggleIncDec("INC", id)}><FaChevronUp /></button>
                <p className="amount">{amount}</p>
                <button type="button" onClick={() => toggleIncDec("DEC", id)}><FaChevronDown /></button>
            </div>
        </article>
    )
}

CartItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired
}

export default CartItem
