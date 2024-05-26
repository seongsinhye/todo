import React from 'react';
import { GrSun } from "react-icons/gr";
import '/Users/seongsinhye/Desktop/project/react/todo/src/css/NavBar.css' 


export default function NavBar({darkBtnHovered, darkModeClick}) {
  

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
        <div className={darkBtnHovered ? 'lightItem' :'item'}>ALL</div>
        <div className={darkBtnHovered ? 'lightItem' :'item'}>Active</div>
        <div className={darkBtnHovered ? 'lightItem' :'item'}>Completed</div>
      </div>
    </>
  );
}

