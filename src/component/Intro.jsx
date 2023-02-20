import React from 'react';
import "./Intro.css"
// import Illustration2 from "../asset/Illustraion2.jpg"
import cat from '../asset/cats.svg'
const Intro = () => {
    return (
        <div className="intro">
            <div className="greeting">
                <div className="text">
                <h1>Hello, User!</h1>
                <h4>Hope you are having an amazing day!</h4>
                </div>
            </div>
            <div className="illustration">
                <img src={cat}alt="cat"/>
            </div>
        </div>
    );
}

export default Intro;