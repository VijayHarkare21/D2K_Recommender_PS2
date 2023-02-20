import React from 'react';
import './Quote.css'
const Quote = () => {
    return (
        <div className="quote">
            <div className="quoteText">
                <div className="quoteHeading">
                    <h1>Quote Of The Day</h1>
                </div>
                <div className="innerQuote">
                    <h3>“Data scientists are kind of like the new Renaissance folks, because data science is inherently multidisciplinary.”</h3>
                </div>
                <div className="author">
                    ~John Foreman
                </div>
            </div>
        </div>
    );
}

export default Quote;