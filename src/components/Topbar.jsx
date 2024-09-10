import React, { useState } from 'react'
import CategoryBtn from './CategoryBtn'
function Topbar({setFilterData,data}) {
  let [searchValue,setSearchValue] = useState('');
  let handleChange = (e) => {
    setSearchValue(e.target.value);
    console.log(searchValue)
    const filter = data[0]?.filter((food) => food.name.toLowerCase().includes(searchValue.toLowerCase()))
  setFilterData(filter);
  }
  return (
    <>
    <div className='bg-[#323334] h-[200px] w-[100%]'>
      <div className='flex md:justify-between flex-wrap mb-10 pt-14 px-16'>
        <img src="./public/Foody Zone.svg" className='h-[30px]' alt="food zone" />
        <input onChange={handleChange} type="text" placeholder='Search...' className='bg-transparent border-2 rounded-lg p-2 text-white border-red-500' />
      </div>
     <CategoryBtn></CategoryBtn>
    </div>
    </>
  )
}

export default Topbar