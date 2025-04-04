import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // ✅ Fixed typo
    if (!text.trim()) return;
    addTodo(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new Todo"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
