import React, { useState } from 'react';
import TodoList from './ElieComponents/TodoList/TodoList';
import Header from './ElieComponents/Header/Header';

const filters = ['all', 'active', 'completed']

export default function EllieTodo() {
  const [filter, setFilter] = useState(filters[0])

  return (
    <>
      <Header filters={filters} filter={filter} onFilterChange={(filter) => setFilter(filter)}/>
      <TodoList filter={filter}/>
    </>
  );
}

