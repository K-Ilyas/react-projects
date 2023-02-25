import "./styles/hero.css"
import phone from "./images/phone.svg"
import { useGlobalContext } from "./context"

function Hero() {
    const { closeSubMenu } = useGlobalContext();

    return (
        <section className="hero" onMouseOver={closeSubMenu}>
            <div className="hero-body">
                <h1 className="title"><span>Payments</span> <span>infrastructure</span> <span>for the internet</span></h1>
                <p className="text">Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.</p>
                <button type="button">Start now</button>
            </div>
            <div className="phone">
                <img src={phone} alt="phone" />
            </div>
        </section>
    )
}
export default Hero