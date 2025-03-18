import { useState } from 'react';
import './App.css';
import { Todo } from './types/todo';
import { TodoInput } from './components/TodoInput';j
import { TodoList } from './components/TodoList';


function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos(prev => [...prev, newTodo]);
  };

  const handleDelete = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const handleToggle = (id: number) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo 
      )
    );
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '500px', margin: '0 auto'}}>
      <h1>To-Do App</h1>
      <TodoInput onAdd={handleAdd} />
      <TodoList todos={todos} onDelete={handleDelete} onToggle={handleToggle} />
    </div>
  );
}

export default App;
