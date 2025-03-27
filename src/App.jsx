import React, { useState } from 'react';
import TodoItem from './TodoItem';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { text, completed: false }]);
  };

  const toggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold">Todo App</h1>
      </header>
      <main className="max-w-md mx-auto">
        {todos.map((todo, index) => (
          <TodoItem key={index} todo={todo} toggleComplete={() => toggleComplete(index)} />
        ))}
        <button onClick={() => addTodo('New Todo')} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Todo</button>
      </main>
    </div>
  );
}

export default App;
