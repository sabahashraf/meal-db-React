import React, { useEffect, useState } from 'react';
import Detail from '../Detail/Detail';
import Meal from '../Meal/Meal';
import './Container.css';

const Container = () => {
    const [meals,setMeals]=useState([]);
    const [detail,setDetail]=useState([]);
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res=>res.json())
        .then(data=>{
            
            setMeals(data.meals)})
    },[]);
    const handleShowDetails = meal=>{
        console.log(meal);
        const selectedMeal = [meal];
        setDetail(selectedMeal);
        console.log(detail);
    }
    return (
        <div>
            <h1 className='header'>Delicious Meals</h1>
            <div className="container">
                <div className="meal-container">
                    {
                        meals.map(meal=><Meal 
                            meal ={meal}
                            key={meal.idMeal}
                            handleShowDetails={handleShowDetails}></Meal>)
                    }
                </div>
                <div className="detail-container">
                   <Detail detail={detail[0]}></Detail>
                </div>
            </div>
        </div>
    );
};

export default Container;