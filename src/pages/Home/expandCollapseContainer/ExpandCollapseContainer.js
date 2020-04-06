import React, { useState } from "react";
import "./ExpandCollapseContainer.scss";

export function ExpandCollapseContainer({name, age}) {
  const [showHiddenRow, setShowHiddenRow] = useState(false);
  const [showHiddenTableRow, setShowHiddenTableRow] = useState(false);

  function setHiddenTableRowStatus(one, two, three) {
      setShowHiddenTableRow(showHiddenTableRow => !showHiddenTableRow);
  }

  function setHiddenRowStatus() {
    if (showHiddenRow) {
      setShowHiddenRow(false);
    } else {
      setShowHiddenRow(true);
    }
  }
  return (
    <div>
        <span>Name: {name}, Age: {age}</span>
      <table className="expand-collapse-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Member</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Account Transfer/Reposting</td>
            <td>4156</td>
          </tr>
          <tr onClick={setHiddenTableRowStatus}>
            <td>Investment Income</td>
            <td>4</td>
          </tr>

          {showHiddenTableRow && (
            <tr>
              <td>Saving Plan</td>
              <td>36</td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="capital-credit-container">
        <div className="capital-credit">Capital Credit</div>

        <div className="name-and-member">
          <div>Name</div>
          <div>Member</div>
        </div>

        <div className="first-row-div" onClick={setHiddenRowStatus}>
          <div>Account Transfer</div>
          <div>4159</div>
        </div>
        {showHiddenRow && (
          <div className="hidden-row">
            <div>I'm hidden</div>
            <div>yes, I am</div>
          </div>
        )}

        <div className="second-row-div">
          <div>Investment Income</div>
          <div>4</div>
        </div>

        <div className="third-row-div">
          <div>Savings Plan</div>
          <div>36</div>
        </div>
      </div>
    </div>
  );
}
