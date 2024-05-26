import React, {useState, useEffect} from 'react';
import './css/TodoList.css';
import { RiCalendarTodoLine } from "react-icons/ri";
import NavBar from './components/NavBar.jsx';
import MainContainer from './components/MainContainer.jsx';
import AddContainer from './components/AddContainer.jsx';

export default function TodoList() {
  const [darkBtnHovered, setDartBtnHovered ] = useState(false)
  const darkModeClick = () => setDartBtnHovered(!darkBtnHovered)
  const todoList = [
    {
      title : '청소하기',
      checked : true,
      index : 0
    },
    {
      title : 'React 공부하기',
      checked : false,
      index : 1
    },
    {
      title : '낮잠자기',
      checked : false,
      index : 2
    },
  ]

  const [todoListAll, setTodlListAll] = useState(todoList);
  const updateTodoList = (updatedList) => {
    setTodlListAll(updatedList);
  };

  useEffect(() => {
    console.log("todoItem update:", todoListAll);
  }, [todoListAll]);

  return (
   <>
    <header className="App-header" >
      <RiCalendarTodoLine style={{fontSize : '64px'}}/>
      <div className='title'>Todo List</div>
      <div className={darkBtnHovered ? 'lightContainer' : 'container'}>
        <NavBar darkModeClick={darkModeClick} darkBtnHovered={darkBtnHovered}/>
        <MainContainer darkBtnHovered={darkBtnHovered} todoList={todoListAll} setTodlListAll={updateTodoList} />
        <AddContainer />
      </div>
    </header>
   </>
  );
}

