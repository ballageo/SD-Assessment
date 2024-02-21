import { React, useEffect, useState } from "react"

export default function QuestionText( { status }) {
  const [questionText, setQuestionText] = useState("")
  const [charLength, setCharLength] = useState(0)

  function changeHandler(e) {
    setQuestionText(e.target.value);
  };
  useEffect(() => {
    setCharLength(questionText.length),
      [questionText]
  })
  return <div className="question-text">
    <label
      className="q-text"
      htmlFor="q-text"
      style={{ fontSize: "12px" }}>
      {charLength} / 255 characters
    </label>
    <input
      className="q-text"
      value={questionText}
      onChange={e => changeHandler(e)}
      maxLength={255}
      placeholder="Question Text"
    />
    {questionText.toLowerCase().includes("select all") && status && <span className="q-error">Please review your question (multi-select wording, single-select question)</span>}
    {questionText.toLowerCase().includes("select one") && !status && <span className="q-error">Please review your question (single-select wording, multi-select question)</span>}
  </div>
}