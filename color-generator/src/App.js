import { useState } from 'react';
import Values from 'values.js';
import Color from './Color';
import './index.css'
import { Button, Colors, Container, Form, Input, InputConatiner, Label, Main } from "./styled-components/components"
import GlobalStyle from "./styled-components/global"


function App() {
    const [color, setColor] = useState('');
    const [colors, setColors] = useState(new Values("#f15025").all(10));
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            const colors = new Values(color).all(10);
            setColors(colors);
        }
        catch (e) {
            setError(true);
        }
    }
    return (
        <>
            <GlobalStyle />
            <Main>
                <Container>
                    <Form onSubmit={handleSubmit} >
                        <Label htmlFor="color">Color Generator</Label>
                        <InputConatiner>
                            <Input error={error} id="Color" name="color" placeholder="#f15025" value={color} onChange={(e) => setColor(e.target.value)} />
                            <Button type="submit">Submit</Button>
                        </InputConatiner>
                    </Form>
                    <Colors>
                        {
                            colors && colors.map((e, index) => {
                                return < Color key={index} {...e} index={index} hexColor={e.hex} />
                            })
                        }
                    </Colors>
                </Container>
            </Main>
        </>
    )
}
export default App