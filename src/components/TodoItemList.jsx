import React, {useEffect} from 'react';
import { FaRegTrashCan } from "react-icons/fa6";

export default function TodoItemList({darkBtnHovered, list, setTodlListAll}) {
  const changeCheck = (index) => {
    setTodlListAll(prev => {
      const updatedList = prev.map((item) =>
        item.index === index ? { ...item, checked: !item.checked } : item
      );
      return updatedList;
  })
  }
  return (
    <>
     <div className='todoItemList'>
        <input type='checkbox'  className="checkbox" value={list.index} checked={list.checked} 
        onChange={() => changeCheck(list.index)}/>
        <span className={darkBtnHovered ? 'lightListTitle' :'listTitle'}>{list.title}</span>
        <FaRegTrashCan size="40" className={ darkBtnHovered ?"ligthTrashIcon":"trashIcon"}/>
      </div>
    </>
  );
}

