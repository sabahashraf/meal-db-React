import React from 'react';
import './Meal.css';

const Meal = (props) => {
    const {meal,handleShowDetails} = props;
    // console.log(meal);
    const {strMealThumb,strMeal} = meal;
  
    return (
        <div className='meal-card'>
            <img src={strMealThumb} alt=''></img>
            <div className="meal-info">
            <h2>{strMeal}</h2>
            <button onClick={()=>handleShowDetails(meal)} className="btn">Show Details</button>
            </div>
           
        </div>
    );
};

export default Meal;