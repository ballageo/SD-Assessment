import { React, useState } from "react";

export default function QuestionOptionButton({ status, name, clickHandler }) {

  return (
    <li className={status ? "active" : "inactive"}>
      <button onClick={clickHandler} type="button" >{name}</button>
    </li>
  )
}