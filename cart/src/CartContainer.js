import "./styles/container.css"
import CartItem from "./CartItem"
import { useGlobalContext } from "./context"

function CartContainer() {
    const { cart, total, clearCart } = useGlobalContext();

    return (

        <section className="cart-container">
            <h1 className="title">YOUR BAG</h1>
            {
                cart.length === 0 ? <p className="empty">is currently empty</p> :
                    <>
                        <div className="items">
                            {cart.map((item) => <CartItem key={item.id} {...item} />)}
                        </div>
                        <footer>
                            <hr />
                            <div className="total">
                                <p className="title">total</p>
                                <p className="value">${total}</p>
                            </div>
                            <button type="button" className="clear" onClick={clearCart}>clear cart</button>
                        </footer>
                    </>
            }
        </section>

    )
}
export default CartContainer