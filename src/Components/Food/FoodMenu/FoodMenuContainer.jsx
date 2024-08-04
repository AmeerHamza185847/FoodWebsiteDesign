import React from 'react';
import { FoodItem } from './FoodItem';
import './FoodMenuContainer.css';

import foodImg1 from '../../../assets/Images/item1.jpg';
import foodImg4 from '../../../assets/Images/item4.jpg';
import foodImg3 from '../../../assets/Images/item3.jpg';



export const FoodMenuContainer = () => {

    const burgerNames = ['Smoky Burger', 'Supreme Burger', 'Pizza']
    const price = ['2.3$', '3.5$', '6$', '1$', '5.3$', '2$']
    return (
        <div className='foodMenuContainer'>
            <h3 style={{ textAlign: 'center', marginBottom: '50px' }}>Food Menu</h3>

            <div className='foodItemWrapper'>
                <FoodItem foodImg={foodImg1} burgerNames={burgerNames[0]} price={price[0]} />
                <FoodItem foodImg={foodImg3} burgerNames={burgerNames[1]} price={price[1]} />
                <FoodItem foodImg={foodImg1} burgerNames={burgerNames[2]} price={price[2]} />
                <FoodItem foodImg={foodImg3} burgerNames={burgerNames[0]} price={price[3]} />
                <FoodItem foodImg={foodImg1} burgerNames={burgerNames[1]} price={price[4]} />
                <FoodItem foodImg={foodImg3} burgerNames={burgerNames[2]} price={price[5]} />
            </div>

            <p style={{
                textAlign: 'center',
                color: 'red',
                margin: '30px',
                cursor: 'pointer'
            }}>See all foods</p>
        </div>
    )
}
