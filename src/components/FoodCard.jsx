import React from 'react'

function FoodCard({food}) {
  return (
    <>
     <div className='md:col-span-6 col-span-12 lg:col-span-4'>
    <div className='flex p-2 rounded-2xl inset-0 bg-gray-800 bg-opacity-10 backdrop-blur-lg shadow-inner shadow-white w-[100%]'>
        <img src={food.image} className='w-32 h-32' alt="ellipse pic" />
        <div className='pl-2'>
          <h2 className='text-md font-semibold'>{food.name}</h2>
          <p className='text-[13px] opacity-85'>{food.text}</p>
          <button className='bg-red-500 px-2 rounded-md mt-6 float-end mr-2'>{food.price}$</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default FoodCard