import React from 'react';
import { Search } from '../Search/Search';
import { FoodComponentContainer } from '../Food/FoodComponentContainer';
import { FoodMenuContainer } from '../Food/FoodMenu/FoodMenuContainer';

export const Home = () => {
  return (
    <div>

      {/* Search component */}
      <Search />
      <FoodComponentContainer />
      <FoodMenuContainer />
    </div>
  )
}
