import React, { useState } from "react";
import Cell from "./Cell";
function Row() {

  return (
    <div>
      <Cell number="1"></Cell>
      <Cell number="1"></Cell>
      <Cell number="1.5"></Cell>
      <Cell number="1.5"></Cell>
      <Cell number="2"></Cell>
      <Cell number="2"></Cell>
      <Cell number="3"></Cell>
      <Cell number="3.5"></Cell>
      <Cell number="4"></Cell>
      <Cell number="5"></Cell>
    </div>
  );
}

export default Row;
