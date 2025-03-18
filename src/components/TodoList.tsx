import { Todo } from "../types/todo";
import { TodoItem } from "./TodoItem";

interface TodoListProps {
    todos: Todo[];
    onDelete: (id: number) => void;
    onToggle: (id: number) => void;
}

export const TodoList = ({ todos, onDelete, onToggle}: TodoListProps) => {
    return (
        <ul style={{marginTop: '2rem'}}>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onDelete={onDelete}
                    onToggle={onToggle}
                />
            ))}
        </ul>
    );
};