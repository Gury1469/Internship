import React from 'react'
import FoodList from './Components/FoodList'

export default function App() {

  const fooditem=["Samosa", "Dal Makhni", "Shahi Paneer", "Kadhai Paneer", "Jalebi"];
  return (
    <>
      
      <FoodList item={fooditem}/>
    </>
  )
}
