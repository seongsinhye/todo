import React, { useState } from 'react';
import { GrSun } from "react-icons/gr";
import '/Users/seongsinhye/Desktop/project/react/todo/src/css/NavBar.css' 


export default function NavBar() {
  const [darkBtnHovered, setDartBtnHovered ] = useState(false)

  return (
    <>
      <div onMouseOver={() => setDartBtnHovered(true)}
        onMouseOut={() => setDartBtnHovered(false)}
        className='darkBtnBox'>
      <GrSun 
        fontSize = '62px'
        color = {darkBtnHovered ? 'black' : 'white'} 
        cursor = 'pointer'
       style = {{ position : 'absolute', left : '70px', top : '60px'}} />
      </div>
      <div className='menuBar'>
        <div className='item'>ALL</div>
        <div className='item'>Active</div>
        <div className='item'>Completed</div>
      </div>
    </>
  );
}

