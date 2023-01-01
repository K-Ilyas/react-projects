/* eslint-disable jsx-a11y/alt-text */
import React from 'react';




function Info({ fullName, age, img }) {
    return (<>
        <article className='item'>
            <img src={img} className="img" />
            <div className='info'>
                <h4 >{fullName}</h4>
                <span className='age'>{age} Years</span>
            </div>

        </article>
    </>
    )

}


export default Info;