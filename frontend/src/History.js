import React from 'react';

function History({ history }) {
  return (
    <div>
      <h2>Completed Todos</h2>
      <ul>
        {history.map((todo) => (
          <li key={todo._id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default History;
