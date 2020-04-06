import React, { useState } from "react";

export function DisplayItems() {
  const [newTodo, setNewTodo] = useState("");
  const [listOfTodos, setListOfTodos] = useState([]);

  function addNewTodo({ target: { value } }) {
    setNewTodo(value);
  }

  function addToTheTodoList(event) {
    event.preventDefault();
    setListOfTodos(prevListOfTodos => {
      return [...prevListOfTodos, newTodo];
    });
    setNewTodo("");
  }

  return (
    <div>
      <form onSubmit={addToTheTodoList}>
        <input onChange={addNewTodo} value={newTodo} />
      </form>
      <div>
        <ul>
          {listOfTodos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
