import React from 'react';
import TodoItemList from './TodoItemList'

export default function MainContainer({darkBtnHovered, todoList, setTodlListAll}) {


  return (
    <>
      <div className={darkBtnHovered ? 'mainLightContainer' : 'mainContainer'}>

      {
        todoList.map((list) => {
            return <TodoItemList list={list} key={list.index} darkBtnHovered={darkBtnHovered} setTodlListAll={setTodlListAll}/>
        })
      }


      </div> 
    </>
  );
}

