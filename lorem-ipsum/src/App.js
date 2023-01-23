import GlobalStyle from "./styled-components/global"
import './index.css'
import { Button, Conatiner, Form, HeaderTitle, Hearder, Input, Label, MainComponent, Paragraphs } from "./styled-components/components"
import { useState } from "react"
import data from './data'

function App() {
    const [paragraphs] = useState(data);
    const [inputValue, setInputValue] = useState(0);
    const [number, setNumber] = useState(null);


    const handleSubmit = (e) => {
        e.preventDefault();
        setNumber((inputValue === 0 || inputValue < 0 || inputValue === "") ? 1 : inputValue > paragraphs.length ? paragraphs.length : inputValue);
    }

    return (
        <>
            <GlobalStyle />
            <MainComponent>
                <Hearder>
                    <HeaderTitle>
                        TIRED OF BORING LOREM IPSUM?
                    </HeaderTitle>
                    <Conatiner>
                        <Form onSubmit={handleSubmit}>
                            <Label htmlFor="number">Paragraphs:</Label>
                            <Input type="number" id="number" name="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                            <Button type="submit">GENERATE</Button>
                        </Form>
                        <Paragraphs>
                            {number && paragraphs.slice(0, number).map((e, index) => <Paragraphs key={index} >{e}</Paragraphs>)}
                        </Paragraphs>
                    </Conatiner>
                </Hearder>
            </MainComponent>
        </>
    )
}
export default App