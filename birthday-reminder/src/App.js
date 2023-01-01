import React, { useState } from 'react'
import Info from './Info';
import './App.css'
import { data } from './data'


function App() {

  const [people, setPeople] = useState(data);

  return <>
    <div className='conatiner'>
      <div className='card'>
        <h2>{people.length} birtdays today</h2>
        {
          people.map((e) => <Info {...e} key={e.id} />)
        }
        <button type='button' className='clear' onClick={() => setPeople([])}>Clear All</button>
      </div>
    </div>
  </>
}


export default App;
