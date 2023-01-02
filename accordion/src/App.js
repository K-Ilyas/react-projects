import React from 'react'
import Question from './Question'
import data from "./data"

function App() {
    return (
        <main id="main">
            <div className="container">
                <h3 >Questions And Answers About Login</h3>
                <div className='questions'>
                    {
                        data.map((question) => {
                            return <Question key={question.id} {...question} />
                        })
                    }
                </div>
            </div>
        </main>
    )
}

export default App