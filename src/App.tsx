import { useState } from 'react'
import './App.css'

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  const handleAddTodo = () => {
    if (!newTodo.toString()) return;

    const todo: Todo = {
      id: Date.now(),
      text: newTodo,
      completed: false 
    };

    setTodos(prev => [...prev, todo]);
    setNewTodo('');
  }

  const handleDeleteTodo = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  const toggleTodoComplete = (id: number) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo 
      )
    );
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '500px', margin: '0 auto'}}>
      <h1>To-Do App</h1>

      <input
        type='text'
        placeholder='Enter a new task'
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        style={{width: '100%', padding: '0.5rem'}}
        />

      <button onClick={handleAddTodo} style={{ marginTop: '1rem'
      }}>
        Add Todo
      </button>

      <ul style={{ marginTop: '2rem'}}>
        {todos.map(todo => (
          <li key={todo.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem'}}>
            <span
              onClick={() => toggleTodoComplete(todo.id)}
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                cursor: 'pointer'
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => handleDeleteTodo(todo.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
