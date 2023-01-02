import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';


function Question({ title, info }) {
    const [showInfo, setShowInfo] = useState(false);

    return (
        <>
            <article className="question">
                <div className="header">
                    <p>{title}</p>
                    <button type="button" onClick={() => setShowInfo((prevState) => !prevState)}>{showInfo ? <AiOutlinePlus /> : <AiOutlineMinus />}</button>
                </div>
                <div className="body" style={{ display: showInfo ? "block" : "none" }}>
                    {info}
                </div>
            </article>
        </>
    )
}

export default Question