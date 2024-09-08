import React from 'react'
import FoodCard from './FoodCard'
function Contentbar({data}) {
  return (
    <>
    <div className='bg-[url(../public/bg.png)] bg-no-repeat bg-cover min-h-[500px] mt-[-5px]' id='contentbar'>
    <div className='grid grid-cols-12 mx-[2%] md:mx-[8%] lg:mx-[11%] gap-5 pt-11 text-white'>
      {data[0]?.map((food) => (
        <FoodCard food={food}></FoodCard>
      ))}
    </div>
     {/* {
      data.map((food) => (
       <FoodCard />
      ))
     } */}
    </div>
    </>
  )
}

export default Contentbar