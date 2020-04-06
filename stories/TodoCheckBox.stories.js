import React from "react";
import { TodoCheckBox } from "../src/components/TodoCheckBox/TodoCheckBox";

export default {
  title: "Todo Check Box"
};

function sayHello() {
  alert("This should be the SAVE function");
}

function saveMePlease() {
  alert("This should be the DELETE function.");
}

export function standard() {
  return (
    <TodoCheckBox
      todoInformation="Mange Milano!!"
      saveTodo={sayHello}
      deleteTodo={saveMePlease}
    />
  );
}
