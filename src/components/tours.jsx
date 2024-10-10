import React from "react";
import Card from "./card.jsx";


const Tours = ({ Tours , removeTour}) => {
  return (
    <div className='container'>
      <div>
        <h2 className='title'>Plan With Shivam</h2>
      </div>

      <div className='cards'>
        {Tours.map((tour) => {
          return <Card {...tour} removeTour={removeTour}></Card>;
        })}
      </div>

    </div>
  );
};

export default Tours; 
