import React, { useState } from "react";
import styles from "./TodoCheckBox.module.scss";

export function TodoCheckBox({ todoInformation, saveTodo, deleteTodo }) {
  const [isChecked, setIsChecked] = useState(false);

  function updateTodo() {
    setIsChecked(isChecked => !isChecked);
    saveTodo()
  }

  return (
    <div>
      <label>
        <input type="checkbox" checked={isChecked} onChange={updateTodo} />
      </label>
      <span
        className={
          isChecked ? styles.checkedInformation : styles.uncheckedInformation
        }
      >
        {todoInformation}
      </span>
      <button onClick={deleteTodo}>x</button>
    </div>
  );
}
