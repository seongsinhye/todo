import React  from 'react';
import { FaRegTrashCan } from "react-icons/fa6";

export default function TodoItemList({darkBtnHovered, list, setTodlListAll}) {
  const changeCheck = (e) => {
    // const status = e.target.checked ? 'completed' : 'active'
  };

  const deleteTodoList = (index) =>{
    setTodlListAll(prev => {
      const updatedList = prev.filter((todo) => todo.index !== index)
      return updatedList;
    })
  }

  return (
    <>
     <div className='todoItemList'>
        <input type='checkbox'  className="checkbox" value={list.index} checked={list.checked === 'completed'} 
        onChange={changeCheck}/>
        <span className={darkBtnHovered ? 'lightListTitle' :'listTitle'}>{list.title}</span>
        <FaRegTrashCan size="40" className={ darkBtnHovered ?"ligthTrashIcon":"trashIcon"}
          onClick={() => deleteTodoList(list.index)}/>
      </div>
    </>
  );
}

