import React from 'react';
import TodoItemList from './TodoItemList'
import { PiFinnTheHuman } from "react-icons/pi";

export default function MainContainer({darkBtnHovered, todoList, setTodlListAll}) {


  return (
    <>
      <div className={darkBtnHovered ? 'mainLightContainer' : 'mainContainer'}>

      {
        todoList.length > 0 ? 
        todoList.map((list) => {
            return <TodoItemList list={list} key={list.index} darkBtnHovered={darkBtnHovered} setTodlListAll={setTodlListAll}/>
        }) :
        <PiFinnTheHuman size="100" className="emptyIcon"/>
      }


      </div> 
    </>
  );
}

