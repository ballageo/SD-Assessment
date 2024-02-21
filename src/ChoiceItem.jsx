import React from "react";
import "./QuestionEditor.css";

export default function ChoiceItem({ id, deleteChoice }) {

  return (
    <li key={id}>
      <label style={{ paddingRight: "5px" }}></label>
      <input placeholder="Choice text..." />
      <button onClick={deleteChoice}>Delete</button>
    </li>
  );
}
