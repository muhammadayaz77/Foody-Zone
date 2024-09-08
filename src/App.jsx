import React, { useEffect, useState } from 'react'
import Topbar from './components/Topbar'
import Contentbar from './components/Contentbar'
let BASE_URL = 'http://localhost:9000/';


function App() {
  let [filterData,setFilterData] = useState('');
  let [searchValue,setSearchValue] = useState('');
  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(null);
  let fetchFoodData = async () => {
    setLoading(true);
    try {
      let response = await fetch(BASE_URL);
      const json = await response.json(); // Await the resolution of the promise
        setData([json]); // Wrap it in an array if it's not
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchFoodData();
    console.log(searchValue)
    const filter = data?.filter((food) => food.name.toLowerCase().includes(searchValue.toLowerCase()))
    setFilterData(filter);
  },[])
  // if(error) return <div>error</div>
  // if(loading) return <div>loading...</div>
  // console.log(data)
  return (
    <>
    <Topbar setSearchValue={setSearchValue}></Topbar>
    <Contentbar data={filter}></Contentbar>
    </>
  )
}

export default App