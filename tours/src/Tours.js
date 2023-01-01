import React from 'react'
import Tour from './Tour'

function Tours({ tours, removeTour }) {
    return (
        <>
            <section id="tours">
                <h2 id="title">Our Tours</h2>
                <div id="decoration"></div>
                <div id='cards'>
                    {
                        tours.map((e) => <Tour key={e.id} {...e} removeTour={removeTour} />)
                    }
                </div>
            </section>
        </>
    )
}

export default Tours;