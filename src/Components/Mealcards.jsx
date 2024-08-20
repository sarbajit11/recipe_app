import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Cart from './Cart';

function Mealcards({ detail }) {
    const [cart, setCart] = useState([]);
    const cartClick = (e) =>{
        setCart([...cart, e])
        console.log(cart);
    }

    return (
        <div className='meals'>
            {detail ? (
                detail.map((e) => (
                    <div className='mealImg' key={e.idMeal}>
                        <img src={e.strMealThumb} alt="" />
                        <p>{e.strMeal}</p>
                        <NavLink to={`/${e.idMeal}`}>
                            <button>Recipe</button>
                        </NavLink>
                        <NavLink >
                        <button onClick={() => cartClick(e.idMeal)}>{<Cart/>}</button>
                        </NavLink>
                    </div>
                ))
            ) : (
                <p>No meals found</p>
            )}
        </div>
    );
}

export default Mealcards;