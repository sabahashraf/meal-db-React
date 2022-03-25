import React from 'react';
import './Detail.css';

const Detail = (props) => {
    const {detail}=props;
    const{strMeal,strInstructions,strCategory}=detail;
    return (
        <div>
            <h3>{strMeal}</h3>
            <p><span style={{fontWeight:'bold'}}>Recipe:</span>{strInstructions}</p>
            <p><span style={{fontWeight:'bold'}}>Category:</span>{strCategory}</p>
            
            
        </div>
    );
};

export default Detail;