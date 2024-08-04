import React from 'react';
import './Food.css';
import { FoodComponent } from './FoodComponent';

import foodItem1 from '../../assets/Images/item1.jpg';
import foodItem2 from '../../assets/Images/item2.jpg';
import foodItem3 from '../../assets/Images/item3.jpg';
import foodItem4 from '../../assets/Images/item4.jpg';
import foodItem5 from '../../assets/Images/item5.jpg';

export const FoodComponentContainer = () => {
  return (
    <div className='foodConatiner'>
      <div style=
      {{
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center',
        flexWrap:'wrap',
        gap:'1.5em',
      }}>
      <FoodComponent foodItem={foodItem1} />
      <FoodComponent foodItem={foodItem4} />
      <FoodComponent foodItem={foodItem3} />
      </div>
    </div>
  )
}
