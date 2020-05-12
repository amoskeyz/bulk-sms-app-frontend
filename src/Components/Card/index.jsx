import React from 'react';


const Card = ({ Image, Header, Quote, Height, Width, Margin }) => {
    return(
    <div className="cardd" style={{ height: `${Height}`, width: `${Width}`, marginTop: `${Margin}`}}>
    <img src = {Image}/>
    <h6>{Header}</h6>
    <p>{Quote}</p>
    </div>
)
}

export default Card;
