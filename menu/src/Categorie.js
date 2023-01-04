import React from 'react'

function Categorie({ name, filterItems }) {
    return (
        <button type="button" className="categorie" onClick={() => filterItems(name)}>{name}</button>
    )
}

export default Categorie