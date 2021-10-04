import React from 'react'
import './App.css';
import TodoList from './components/Todo.List';
import background from './components/background';


function App() {
  return (
    <div className="todo-app">
      <background />
     <h1>LEMBRETES</h1>
     <TodoList />
    </div>
  );
}

export default App;
