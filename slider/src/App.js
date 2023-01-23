import {
    Container,
    DivDecoration,
    HeaderComponent,
    MainComponent,
    TitleComponent,
    Card,
    ChevronBtn,
    CardTitle,
    CardImage,
    Name,
    Role,
    Info,
    CardFooter,
} from "./styled-components/components";
import { GlobalStyle } from "./styled-components/global";
import "./index.css";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import { useState, useEffect } from "react";
import data from "./data";

function App() {

    const [people] = useState(data);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const animation = setInterval(
            () => setIndex(handleIndex(index + 1))
            , 3000);
        return () => {
            clearInterval(animation);
        }
    }, [index]);

    // controlle index value
    const handleIndex = (value) => {
        return value < 0 ? data.length - 1 : (value > data.length - 1 ? 0 : value);
    }

    return (
        <>
            <GlobalStyle />
            <MainComponent>
                <HeaderComponent>
                    <DivDecoration>/</DivDecoration>
                    <TitleComponent>Reviews</TitleComponent>
                </HeaderComponent>
                <Container>
                    {people.map(({ id, image, name, quote, title }, personIndex) => {
                        let position = (index === personIndex) ? "active" : (personIndex === index - 1 ||
                            (index === 0 && personIndex === people.length - 1)) ? "last" : "next";
                        return (
                            <Card key={id} position={position}>
                                <CardTitle>
                                    <CardImage src={image} alt={`${index}--${name}`} />
                                    <Name>{name}</Name>
                                    <Role>{title}</Role>
                                </CardTitle>
                                <Info>{quote}</Info>
                                <CardFooter>
                                    <FaQuoteRight />
                                </CardFooter>
                            </Card>
                        );
                    })}
                    <ChevronBtn left={true} onClick={() => setIndex(handleIndex(index - 1))}>
                        <FaChevronLeft />
                    </ChevronBtn>
                    <ChevronBtn right={true} onClick={() => setIndex(handleIndex(index + 1))}>
                        <FaChevronRight />
                    </ChevronBtn>
                </Container>
            </MainComponent>
        </>
    );
}
export default App;
