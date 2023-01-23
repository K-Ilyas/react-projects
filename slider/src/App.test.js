import { render, screen } from "@testing-library/react"
import App from "./App"


// first unit test
describe("Test for fun", () => {
    test("must render the compnenet correctly", async () => {
        render(<App />);
        expect(screen.getByText("maria ferguson")).toBeTruthy();
        screen.debug();
    })
});

