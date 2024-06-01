import React, {useState} from 'react';
import AddTodo from './AddTodo';
import Todo from '../Todo/Todo'

export default function TodoList({filter}) {
  const [todos, setTodos] = useState([
    {id : '123', text : '장보기', status : 'active'},
    {id : '124', text : '공부하기', status : 'active'},
  ])

  const handleAdd = (todo) => {setTodos([...todos, todo])}
  const handelUpdate = (updated) => {setTodos(todos.map(t => t.id === updated.id ? updated : t))}
  const handelDelete = (deleted) => {setTodos(todos.filter(t => t.id !== deleted.id))}

  const filtered = getFilteredItem(todos, filter)
  return (
    <>
      <ul>
        {filtered.map((item) => <Todo key={item.id} todo={item} 
          onUpdate={handelUpdate}
          onDelete={handelDelete}
        />) }
      </ul>
     <AddTodo onAdd={handleAdd}/>
    </>
  );
}

function getFilteredItem(todos, filter){
  if(filter === 'all'){
    return todos;
  }
  return todos.filter(todo => todo.status === filter)
}

