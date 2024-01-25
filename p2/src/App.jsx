import React from "react";
import FoodList from "./Components/FoodList";
import "./App.css";

export default function App() {
  const fooditem = [
    "Samosa",
    "Dal Makhni",
    "Shahi Paneer",
    "Kadhai Paneer",
    "Jalebi",
    "GulabJamun",
  ];
  return (
    <>
      <FoodList item={fooditem} />
    </>
  );
}
