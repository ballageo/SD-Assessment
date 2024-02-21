import React, { useState } from "react";
import "./QuestionEditor.css";
import ChoiceItem from "./ChoiceItem";

export default function ChoiceList() {
  const [choices, setChoices] = useState([]);

  function addChoice() {
    console.log("Adding choice");
    setChoices((currChoices) => {
      return [...currChoices, { id: crypto.randomUUID() }];
    });
  }

  function deleteChoice(id) {
    console.log("tryna delete");
    console.log(id);
    return setChoices((currChoices) => {
      return currChoices.filter((choice) => {
        console.log("choice is");
        console.log(choice);
        return choice.id !== id;
      });
    });
  }

  return (
    <div className="question-body">
      <ol className="choice-item-list">
        <button onClick={addChoice}>Add choice</button>
        {choices.map((choice) => {
          return (
            <ChoiceItem
              id={choice.id}
              deleteChoice={() => deleteChoice(choice.id)}
            />
          );
        })}
      </ol>
    </div>
  );
}
