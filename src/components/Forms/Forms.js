import React, { useState } from "react";
import "./Forms.scss";

export function Forms() {
  // this form has several fields. The goal is to use 1 state for all of them
  const [fields, setFields] = useState({
    name: "",
    age: 0,
    comments: "",
    birthDate: {}
  });

  function updateFields(event) {
    /*Common way of getting the property you need.
    * the event is what get passed as argument (in this case the event is Onchange)
    * then the target will select the entire tag (in this case the input )
    * and the name property will be selected
    * notice that these variables(name and value) are global within the function*/
    const name = event.target.name;
    const value = event.target.value;

    console.log(name, value);
    /*setFields will update the fields objects every time something is written in the input
    * the argument is prevFields because these is the standard way of doing it. It will still update the fields
    * then prevFields will be spread to update the object with a given name and value*/
    setFields(prevFields => {
      return {
        ...prevFields,
        [name]: value
      };
    });
  }
  // this is the function used to submit the form
  function createUser(event) {
    //  the method .preventDefault() will stop the form from submitting when the user presses enter
    event.preventDefault();
    //for the purpose of the exercise we need an alert. So we converted the fields objects into a string
    alert(JSON.stringify(fields));
  }

  return (
    <div>
      {/*the event needs to describe what the form does*/}
      <form onSubmit={createUser}>
        <label>
          Name:
          <input
            name="name"
            value={fields.name}
            onChange={updateFields}
            placeholder="Enter your name"
          />
        </label>

        <label>
          Age:
          <input
            type="number"
            name="age"
            value={fields.age}
            onChange={updateFields}
          />
        </label>

        <label>
          Comments
          <textarea
            name="comments"
            value={fields.comments}
            onChange={updateFields}
          />
        </label>

        <label>
          Date of birth
          <input
            type="date"
            name="birthDate"
            value={fields.birthDate}
            onChange={updateFields}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}


