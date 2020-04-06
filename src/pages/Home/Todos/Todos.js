import React, { useState, useEffect } from "react";
import "./Todos.scss";

export function Todos() {
  const [newTodos, setNewTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(newTodos => {
          return setNewTodos(newTodos)
      });
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
        {newTodos
            .filter((newTodo, index) => index < 10)
            .map(newTodo => {
              return (
                <tr>
                  <td>{newTodo.title}</td>
                  <td>{newTodo.completed.toString()}</td>
                </tr>
              );
            })}
      </tbody>
    </table>
  );
}
