import { AlertStyle } from "./components/components"

function Alert({ message, type }) {
    return (
        <AlertStyle type={type}>
            {message}
        </AlertStyle>
    )
}
export default Alert