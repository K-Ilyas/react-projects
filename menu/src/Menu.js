import React from 'react'

function Menu({ items }) {
    return (
        <section className="items">
            {items.map(({ id, title, price, img, desc }) => (
                <article key={id} className="item">
                    <img className="img" src={img} alt={title} />
                    <div className="body">
                        <div className="title">
                            <h2>{title}</h2>
                            <span className='price'>$ {" " + price}</span>
                        </div>
                        <p className="description">
                            {desc}
                        </p>
                    </div>
                </article>))}
        </section >
    )
}

export default Menu