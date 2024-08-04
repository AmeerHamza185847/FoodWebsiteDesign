import React from 'react';
import './Search.css';

export const Search = () => {
  return (
    <div className='searchContainer'>
        <form className='searchForm'>
            <p>
                <input 
                type="text"
                placeholder='Search for food' />
            </p>
            <p>
                <input 
                type="submit" 
                value="Search" />
            </p>
        </form>
    </div>
  )
}
