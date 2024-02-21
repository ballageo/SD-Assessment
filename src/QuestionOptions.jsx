import { React, useState } from "react";
import QuestionOptionButton from "./QuestionOptionButton";

export default function QuestionOptions({ status, setStatus }) {

  function toggleStatus(status) {
    if (status == false) {
      setStatus((prevState) => {
        return !prevState;
      });
    }
  }

  return (
    <div className="divider">
      <div className="question-option-menu">
        <ul className="inline-select">
          <QuestionOptionButton
            clickHandler={() => toggleStatus(status)}
            name="Single-select"
            status={status}
          />
          <QuestionOptionButton
            clickHandler={() => toggleStatus(!status)}
            name="Multi-select"
            status={!status}
          />
        </ul>
      </div>
    </div>
  );
}
