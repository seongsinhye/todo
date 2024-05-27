import React from 'react';
import { GrSun } from "react-icons/gr";


export default function NavBar({darkBtnHovered, darkModeClick, setTodlListAll, originalTodoList, setOriginalTodoList}) {
  const allBtn = () => {
    setOriginalTodoList(prev => [...prev])
  }

  const activeBtn = () => {
    setTodlListAll(prev => {
      const updateList = prev.filter((todo) => todo.checked === false)
      return updateList;
    })
  }

  const completedBtn = () => {
    setTodlListAll(prev => {
      const updateList = prev.filter((todo) => todo.checked === true)
      return updateList;
    })
  }

  return (
    <>
      <div onClick={() => {darkModeClick()}}
        className='darkBtnBox'>
      <GrSun 
        fontSize = '62px'
        color = {darkBtnHovered ? 'black' : 'white'} 
        cursor = 'pointer'
       style = {{ position : 'absolute', left : '70px', top : '43px'}} />
      </div>
      <div className='menuBar'>
        <div className={darkBtnHovered ? 'lightItem' :'item'} onClick={allBtn}>ALL</div>
        <div className={darkBtnHovered ? 'lightItem' :'item'} onClick={activeBtn}>Active</div>
        <div className={darkBtnHovered ? 'lightItem' :'item'} onClick={completedBtn}>Completed</div>
      </div>
    </>
  );
}

