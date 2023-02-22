import React from 'react';
import './Card.css'

const Card = ({category, img}) => {
    return (
        <div className="card">
            <div className="image">
                <img src={img} alt="loading"/>
            </div>
            <div className="container">
                <h4>{category}</h4>
            </div>
        </div>
    );
}

export default Card;