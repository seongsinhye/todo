import React from 'react';
import './css/TodoList.css';
import { RiCalendarTodoLine } from "react-icons/ri";
import NavBar from './components/NavBar.jsx';
import MainContainer from './components/MainContainer.jsx';

export default function TodoList() {
  return (
   <>
    <header className="App-header">
      <RiCalendarTodoLine style={{fontSize : '64px'}}/>
      <div className='title'>Todo List</div>
      <div className='container'>
        <NavBar />
        <MainContainer />
      </div>
    </header>
   </>
  );
}

