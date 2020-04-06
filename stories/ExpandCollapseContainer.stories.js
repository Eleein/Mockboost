import React from "react";
import { ExpandCollapseContainer } from "../src/pages/Home/expandCollapseContainer/ExpandCollapseContainer";

export default {
  title: "Expand Collapse Container"
};

export const containerSet = () => (
  <div>
    <ExpandCollapseContainer name={"Joe"} age={37} />
  </div>
);
