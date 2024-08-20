import React, { useState } from 'react';
import Mealcards from './Mealcards';
import Cart from './Cart';
function Mainpage() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');

    const inputHandle = (event) => {
        setSearch(event.target.value);
    };

    const myFun = async () => {
        const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        const jsonData = await get.json();
        setData(jsonData.meals);
    };

    return (
        <div className='container'>
            
            <div className='searchBar'>
                <input type="text" placeholder='Search Dishes' onChange={inputHandle} />
                <button onClick={myFun}>Search</button>
                <button>{<Cart/>}</button>
            </div>
            <div>
                <Mealcards detail={data} />
            </div>
        </div>
    );
}

export default Mainpage;