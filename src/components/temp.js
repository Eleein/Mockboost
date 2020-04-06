import React, { useState } from "react";

export function Temp() {
  const [name, setName] = useState("");

  function updateName(event) {
    setName(event.target.value);
  }

  return (
    <form>
      <label>
        Name:
        <input type="text" value={name} onChange={updateName} />
      </label>
    </form>
  );
}
