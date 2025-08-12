import React, { useState } from 'react';

function TodoList({ todos, toggleComplete, deleteTodo, updateTodo }) {
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  const handleEditClick = (todo) => {
    setEditId(todo._id);
    setEditText(todo.text);
  };

  const handleSaveClick = () => {
    if (editText.trim()) {
      updateTodo(editId, editText);
      setEditId(null);
      setEditText('');
    }
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo._id}>
          {editId === todo._id ? (
            <>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button onClick={handleSaveClick}>Save</button>
              <button onClick={() => setEditId(null)}>Cancel</button>
            </>
          ) : (
            <>
              <span onClick={() => toggleComplete(todo._id, todo.completed)}>
                {todo.text}
              </span>
              <button onClick={() => handleEditClick(todo)}>Edit</button>
              <button onClick={() => markComplete(todo._id, todo.completed)}>
  Complete
</button>

            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
