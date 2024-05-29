import { useState } from "react";
import "../styles/QuestionSelector.css";

export default function QuestionSelector({
  difficulty,
  numOfQuestions,
  selectedQuestions,
  dispatch,
}) {
  function handleChange(e) {
    console.log("g");
    dispatch({
      type: "updateNumOfQuestions",
      payLoad: Number(e.target.value),
    });
  }

  return (
    difficulty && (
      <>
        <p className="questions-label">Select number of questions:</p>
        <input
          className="questions-range"
          type="range"
          max={selectedQuestions.length}
          value={numOfQuestions}
          onChange={handleChange}
        />
        <p className="questions-total">Question(s): {numOfQuestions}</p>
      </>
    )
  );
}
