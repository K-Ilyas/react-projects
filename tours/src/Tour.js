import React from 'react'
import { useState } from 'react';

function Tour({ id, name, info, image, price, removeTour }) {
    const [showAll, setShowAll] = useState(false);
    const words = info.split(" ");
    const handleShow = () => {
        setShowAll(!showAll);
    }
    return (
        <>
            <div className='card'>
                <div className='card-img'>
                    <img className='img' src={image} alt="asc" />
                </div>
                <div className='card-body'>
                    <div className='card-title'>
                        <h3 className='title'>{name}</h3>
                        <span className='price'>$ {price}</span>
                    </div>
                    <p>
                        {showAll ? info : (words.slice(0, info.split(" ").length / 2)).join(" ") + " ..."}
                        {' '}<span className='show' onClick={handleShow}>{showAll ? 'Show Less' : 'Show More'}</span>
                    </p>
                    <button className='button' onClick={() => removeTour(id)}>Not Interested</button>
                </div>
            </div>
        </>
    )
}

export default Tour;