import React from 'react';

export default function AddContainer() {
  return (
    <>
      <div className='AddBox'>
        <input placeholder='Add Todo 입력하세요' className='AddInput'/>
        <button className='AddBtn'>Add</button>
      </div> 
    </>
  );
}

