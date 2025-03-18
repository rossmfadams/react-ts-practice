import React, { useState } from "react";

interface TodoInputProps {
    onAdd: (text: string) => void;
}

export const TodoInput = ({ onAdd }: TodoInputProps) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;
        onAdd(input.trim());
        setInput('');
    };

    return (
        <form onSubmit={handleSubmit} style={{display: 'flex', gap: '0.5rem'}}>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add a todo"
            />
            <button type="submit">Add</button>
        </form>
    );
};