import React from 'react'
import Title from './Components/Title'
import AddToDo from './Components/AddToDo'
import ToDoList from './Components/ToDoList'

export default function App() {
  return (
    <>
    <div className='shadow p-3 mb-5 bg-body-tertiary rounded container'>
      <center>
        <Title/>
        <AddToDo/>
        <ToDoList/>
      </center>
    </div>
    </>
  )
}
