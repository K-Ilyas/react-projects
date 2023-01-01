import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import data from './data'

function Review() {
    const [index, setIndex] = useState(0);
    const { name, job, text, image } = data[index];

    // controlle index value
    const handleIndex = (value) => {
        return value < 0 ? data.length - 1 : (value > data.length - 1 ? 0 : value);
    }
    const handleNext = () => {
        setIndex((pervState) => {
            return handleIndex(pervState + 1);
        });
    }
    const handlePervious = () => {
        setIndex((pervState) => {
            return handleIndex(pervState - 1);
        });
    }

    const handleRandom = () => {
        const newIndex = Math.floor(Math.random() * data.length);
        setIndex((pervState) => {
            return handleIndex(newIndex === index ? newIndex + 1 : newIndex);
        });
    }

    return (
        <article className="card">

            <div className='avatar'>
                <div className='quote'>
                    <FaQuoteRight fill='white' />
                </div>
                {/* <BsFillChatQuoteFill /> */}
                <div className='img' >
                    <img src={image} alt="Anna Johnson" />
                </div>
            </div>

            <div className="body">
                <div className='title'>
                    <h3 className='name'>{name}</h3>
                    <span className='job'>{job}</span>
                </div>
                <p className="text">
                    {text}
                </p>
                <div>
                    <button type='button' className='nextPrevious' onClick={handleNext}>
                        <FaChevronLeft />
                    </button>
                    <button type='button' className='nextPrevious' onClick={handlePervious}>
                        <FaChevronRight />
                    </button>
                </div>
                <button type='button' className='random' onClick={handleRandom}>Surprise Me</button>
            </div>
        </article>
    )
}

export default Review