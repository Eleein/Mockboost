import React, { useState, useEffect } from "react";

export function Countries() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(todos => setTodos(todos));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Completed</th>
        </tr>
      </thead>
      <tbody>
        {todos.map(todo => (
          <tr>
            <td>{todo.title}</td>
            <td>{todo.completed.toString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
