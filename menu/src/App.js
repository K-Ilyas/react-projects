import React, { useState } from 'react'
import Categorie from './Categorie'
import data from './data'
import Menu from './Menu';

function App() {
    const [items, setItems] = useState(data);

    // create categories 
    const categories = data.reduce((accumulator, current) => {
        if (!accumulator.includes(current.category)) {
            accumulator.push(current.category);
        }
        return accumulator;
    }, ["All"]);

    //filter items
    const filterItems = (categorie) => {
        if (categorie === "All") {
            setItems(data);

        }
        else {
            setItems([...data.filter((e) => e.category === categorie)]);
        }
    }
    console.log(categories);
    return (
        <main>
            <header className="header">
                <h1>Our Menu</h1>
                <div id="decoration"></div>
            </header>
            <section className="container">
                <div className="categories">
                    {categories.map((categorie, index) => <Categorie key={`${categorie}-${index}`} name={categorie} filterItems={filterItems} />)}
                </div>
                <Menu items={items} />
            </section>
        </main>
    )
}

export default App