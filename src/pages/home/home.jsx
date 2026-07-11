import React, { useState } from 'react'
import './home.css'
import Header from '../../components/header/header.jsx'
import ExploreMenu from '../../components/explore menu/exploremenu.jsx'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay.jsx'
import AppDownload from '../../components/AppDownload/AppDownload.jsx'

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div className='home'>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  )
}

export default Home
