import React from 'react';
import './TodoList.css';
import { RiCalendarTodoLine } from "react-icons/ri";

export default function TodoList() {
  return (
   <>
    <header className="App-header">
      <RiCalendarTodoLine style={{fontSize : '64px'}}/>
      <div className='title'>
        Todo List</div>
      <div className='container'>

      </div>
    </header>
   </>
  );
}

