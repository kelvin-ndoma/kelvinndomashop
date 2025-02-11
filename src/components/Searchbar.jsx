import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const Searchbar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Show the search bar only if on a collection page and showSearch is true
    if (location.pathname.includes('collection') && showSearch) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location, showSearch]); // Include showSearch in dependencies to re-check visibility when it changes

  return visible ? (
    <div className='border-t border-b bg-gray-50 text-center'>
      <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-5 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type='text'
          className='flex-1 outline-none bg-inherit text-sm'
          placeholder='Search for products...'
        />
        <img className='w-4' src={assets.search_icon} alt="search icon" />
      </div>
      <img
        onClick={() => setShowSearch(false)}
        className='inline w-4 cursor-pointer'
        src={assets.cross_icon}
        alt="close search"
      />
    </div>
  ) : null;
};

export default Searchbar;
