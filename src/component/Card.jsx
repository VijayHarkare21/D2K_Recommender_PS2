import React from 'react';
import image from '../asset/images.jpg';
import './Card.css'

const Card = () => {
    return (
        <div className="card">
            <div className="image">
                <img src={image} alt="loading"/>
            </div>
            <div className="container">
                <h4>Artificial Intelligence</h4>
            </div>
        </div>
    );
}

export default Card;