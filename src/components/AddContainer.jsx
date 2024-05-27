import React, { useState } from 'react';

export default function AddContainer({todoList, setTodlListAll, setOriginalTodoList }) {
  const [addTodo, setAddTodo] = useState('');

  const handelChange = (e) => setAddTodo(e.target.value);
  
  const handelSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      title : addTodo,
      checked : false,
      index : todoList.length
    }
    setTodlListAll(prev => [...prev , newTodo])
    setOriginalTodoList(prev => [...prev , newTodo])
  }


  return (
    <>
      <div className='AddBox' onSubmit={handelSubmit}>
        <form>
          <input placeholder='Add Todo 입력하세요' className='AddInput' onChange={handelChange}/>
          <button className='AddBtn' type='submit'>Add</button>
        </form>
      </div> 
    </>
  );
}

