import React, {useState} from "react";

const Card = ({id, image, info, price, name, removeTour}) => {

  const [description, updateDesc] = useState(`${info.substring(0,200)}....`)

  const [readmore,  updateReadmore] = useState(false);

  function readmoreHandler () {

    updateReadmore(!readmore);
    
  }

  


  return (
    <div className="card">
      <img src={image} alt={name} className='image'/>

      <div className='tour-info'>

        <div className="tour-details">
          <div className="tour-price text-green-600 font-semibold ">{price}</div>
          <div className="tourname font-semibold">{name}</div>
        </div>

        <div className="description cursor-pointer">
            {readmore ? info : `${info.substring(0, 200)}`}
            <span className="read-more text-blue-600 font-semibold " onClick={readmoreHandler}>
              {readmore ? "  show less" : "...read more"}
            </span>
        </div>

      </div>

      <button onClick={() => removeTour(id)} className='button-red flex p-2 border-2 w-2/3 rounded-xl justify-center items-center hover:bg-red-600 transition hover:text-white'>
        Not Interested
      </button>
      
    </div>
  )
};

export default Card;
