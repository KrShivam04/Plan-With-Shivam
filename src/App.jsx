import "./App.css";
import data from './data.js'
import Tours from "./components/tours.jsx";
import {useState} from 'react'

function App() {

  const [tours, setTours] = useState(data);

  function removeTourHandler (id) {
    const newTours = tours.filter(
      tour => tour.id !== id
    );
    setTours(newTours);
  }

  if (tours.length === 0) {
    return (

      <div className="main-refresh-content">
          <div className="refresh">
            <h1>No tours found</h1>
            <button className='button-white'onClick={() => {setTours(data)}}>Refresh</button>
          </div>
      </div>
      
    )
  }

  return (
    <div className='app'>
      <Tours Tours={tours} removeTour={removeTourHandler}></Tours>
    </div>
  );
}

export default App;
