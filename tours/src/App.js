import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Loading from './Loading';
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [tours, setTours] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const removeTour = (id) => {
    setTours((pervState) => [...pervState.filter(e => e.id !== id)]);
  }

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((tours) => {
        setIsEmpty(false);
        setIsLoading(false);
        setTours(tours)
      }
      )
      .catch(err => console.log(err));
  }, [refresh]);


  useEffect(() => {
    if (tours.length === 0)
      setIsEmpty(true);
  }, [tours]);

  return (
    <>
      <main className='container'>
        {isLoading ? <Loading /> : (isEmpty ? (<div id='empty'>
          <h2 >No Tour Left</h2>
          <button type='button' onClick={() => setRefresh(!refresh)}>Refresh</button>
        </div>) : <Tours tours={tours} removeTour={removeTour} />)}
      </main>
    </>
  )
}

export default App