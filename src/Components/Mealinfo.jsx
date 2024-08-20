import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Mealinfo() {
    const { mealId } = useParams();
    const [info, setInfo] = useState(null);

    useEffect(() => {
        const getInfo = async () => {
            const get = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
            const jsonData = await get.json();
            if (jsonData.meals) {
                setInfo(jsonData.meals[0]);
            }
        };

        getInfo();
    }, [mealId]);

    return (
        <div>
            {!info ? (
                <p>Data not found</p>
            ) : (
                <div className='mealInfo'>
                    <img src={info.strMealThumb} alt={info.strMeal} />
                    <div className='info'>
                        <h1>{info.strMeal}</h1>
                        <h3>Instructions</h3>
                        <p>{info.strInstructions}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Mealinfo;