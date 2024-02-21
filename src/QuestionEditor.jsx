import { React, useState } from "react";
import "./QuestionEditor.css";
import ChoiceList from "./ChoiceList";
import QuestionText from "./QuestionText";
import QuestionOptions from "./QuestionOptions";

export default function QuestionEditor() {
  const [questionText, setQuestionText] = useState("");
  const [isActive, setIsActive] = useState(true);

  return (
      <div className="question-editor">
        <div className="config">Q1</div>
        <div className="main">
          <QuestionText status={isActive} />
          <ChoiceList />
          <QuestionOptions status={isActive} setStatus={setIsActive} />
        </div>
      </div>
  );
}
