import { useEffect, useState } from "react";
import { ColorRender, Text } from "./styled-components/components"

function Color({ rgb, weight, hexColor, index }) {
    const [alert, setAlert] = useState(false);
    const hexValue = `#${hexColor}`;
    const handleClick = () => {
        navigator.clipboard.writeText(hexValue);
        setAlert(true);
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlert(false);
        }, 2000)
        return () => {
            clearTimeout(timeout);
        }
    }, [alert]);
    return (
        <ColorRender bgColor={rgb.join(',')} color={index > 10 ? "dark" : "light"} onClick={handleClick}>
            <Text>{weight}%</Text>
            <Text>{hexValue}</Text>
            {alert && <Text>copiend to clipboard</Text>}
        </ColorRender>
    )
}
export default Color