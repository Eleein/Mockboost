import React, { useState } from "react";

export default {
  title: "Form"
};

export function Temp() {
  const [fields, setFields] = useState({
    isGoing: false,
    numberOfGuests: 10,
    emailAddress: ""
  });

  function updateFormFields(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setFields({
      ...fields,
      [name]: value
    });
  }

  return (
    <form>
      <label>
        Is going:
        <input
          name="isGoing"
          type="checkbox"
          checked={fields.isGoing}
          onChange={updateFormFields}
        />
      </label>
      <br />
      <label>
        Number of guests:
        <input
          name="numberOfGuests"
          type="number"
          value={fields.numberOfGuests}
          onChange={updateFormFields}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="emailAddress"
          value={fields.emailAddress}
          onChange={updateFormFields}
        />
      </label>
    </form>
  );
}
