import { useState } from 'react';
import './App.css';
import { Todo } from './types/todo';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import { FilterBar } from './components/FilterBar';


function App() {
  type Filter = 'all' | 'active' | 'completed';
  const [filter, setFilter] = useState<Filter>('all');
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
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div style={{ padding: '2rem', maxWidth: '500px', margin: '0 auto'}}>
      <h1>To-Do App</h1>
      <TodoInput onAdd={handleAdd} />
      <FilterBar filter={filter} onChange={setFilter} />
      <TodoList todos={filteredTodos} onDelete={handleDelete} onToggle={handleToggle} />
      {todos.some(todo => todo.completed) && (
        <button
          onClick={() =>
            setTodos(prev => prev.filter(todo => !todo.completed))
          }
          style={{marginTop: '1rem'}}
        >
          Clear Completed
        </button>
      )}
    </div>
  );
}

export default App;
