import React, { useState } from 'react'
import CategoryBtn from './CategoryBtn'
function Topbar({setSearchValue}) {
  return (
    <>
    <div className='bg-[#323334] h-[200px] w-[100%]'>
      <div className='flex md:justify-between flex-wrap mb-10 pt-14 px-16'>
        <img src="./public/Foody Zone.svg" className='h-[30px]' alt="food zone" />
        <input onChange={(e) => setSearchValue(e.target.value)} type="text" placeholder='Search...' className='bg-transparent border-2 rounded-lg p-2 text-white border-red-500' />
      </div>
     <CategoryBtn></CategoryBtn>
    </div>
    </>
  )
}

export default Topbar