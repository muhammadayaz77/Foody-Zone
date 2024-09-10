import React, { useEffect, useState } from 'react'
import Topbar from './components/Topbar'
import Contentbar from './components/Contentbar'
let BASE_URL = 'http://localhost:9000/';


function App() {
  let [filterData,setFilterData] = useState([]);
  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(null);

  let fetchFoodData = async () => {
    setLoading(true);
    try {
      let response = await fetch(BASE_URL);
      const json = await response.json(); // Await the resolution of the promise
      setData([json]); // Wrap it in an array if it's not
      setFilterData(data);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    useEffect(() => {
      fetchFoodData();
    },[])
    // if(error) return <div>error</div>
    // console.log(searchValue)
    // 
    
    // if(loading) return <div>loading...</div>
    // console.log(data)
    console.log(data)
    console.log(filterData)
  return (
    <>
    <Topbar setFilterData={setFilterData} data={data}></Topbar>
    <Contentbar data={filterData}></Contentbar>
    </>
  )
}

export default App