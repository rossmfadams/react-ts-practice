import { Todo } from "../types/todo";

interface TodoItemProps {
    todo: Todo;
    onDelete: (id: number) => void;
    onToggle: (id: number) => void;
}

export const TodoItem = ({ todo, onDelete, onToggle }: TodoItemProps) => {
    return (
        <li style={{display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <span
                onClick={() => onToggle(todo.id)}
                style={{
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    cursor: 'pointer'
                }}
            >
                {todo.text}
            </span>
            <button onClick={() => onDelete(todo.id)}>❌</button>
        </li>
    );
};