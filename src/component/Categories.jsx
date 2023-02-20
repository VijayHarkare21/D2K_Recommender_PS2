import React from 'react';
import Card from './Card';
import './Categories.css'
const Categories = () => {
    return (
        <div className='categories'>
        <div className="title">
            <h1>Categories</h1>
        </div>
        <div className="cards">
        {/* <div className="first"> */}
            <Card/>
            <Card/>
            <Card/>
        {/* </div> */}
        {/* <div className="second"> */}
            <Card/>
            <Card/>
            <Card/>
        {/* </div> */}

        </div>
        </div>
    );
}


export default Categories;