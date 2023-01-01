import React from 'react'
import Review from './Review'
import './App.css'

function App() {
  return (
    <main id='main'>
      <header>
        <h2>Our Reviews</h2>
        <div id="decoration"></div>
      </header>
      <div className='container'>
        <Review />

      </div>
    </main>
  )
}

export default App