import React from 'react';
import Card from './Card';
import './Categories.css';
import image1 from '../asset/images.jpg';
import image2 from '../asset/Data_Analytics.png'
import image3 from '../asset/Big_Data.jpg'
import image4 from '../asset/Deep_Learning.jpeg'
import image5 from '../asset/Data_Science.jpeg'
import image6 from '../asset/Machine_Learning.png'

const Categories = () => {
    return (
        <div className='categories'>
        <div className="title">
            <h1>Categories</h1>
        </div>
        <div className="cards">
        {/* <div className="first"> */}
            <Card category="Artificial Intelligence" img={image1}/>
            <Card category="Analytics" img={image2}/>
            <Card category="Big Data" img={image3}/>
        {/* </div> */}
        {/* <div className="second"> */}
            <Card category="Deep Learning" img={image4}/>
            <Card category="Data Science" img={image5}/>
            <Card category="Machine Learning" img={image6}/>
        {/* </div> */}

        </div>
        </div>
    );
}


export default Categories;