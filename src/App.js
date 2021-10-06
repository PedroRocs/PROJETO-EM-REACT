import React from 'react'
import './App.css';
import TodoList from './components/Todo.List';



function App() {
  return (
    <div className="todo-app">
     
     <h1>LEMBRETES</h1>
     <TodoList />
    </div>
  );
}

export default App;
