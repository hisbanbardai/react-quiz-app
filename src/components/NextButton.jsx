import { useEffect, useRef } from "react";
import "../styles/NextButton.css";

export default function NextButton({
  dispatch,
  selectedAnswerIndex,
  numOfQuestions,
  currentQuestionIndex,
}) {
  const nextButtonRef = useRef(null);

  useEffect(
    function () {
      if (selectedAnswerIndex !== null && nextButtonRef.current !== null) {
        nextButtonRef.current.scrollIntoView({ behavior: "smooth" });
      }
    },
    [selectedAnswerIndex]
  );

  if (
    selectedAnswerIndex !== null &&
    currentQuestionIndex + 1 < numOfQuestions
  ) {
    return (
      <div className="next">
        <button
          className="btn"
          onClick={() => dispatch({ type: "nextQuestion" })}
          ref={nextButtonRef}
        >
          Next
        </button>
      </div>
    );
  }

  if (
    selectedAnswerIndex !== null &&
    currentQuestionIndex + 1 === numOfQuestions
  ) {
    return (
      <div className="next">
        <button
          className="btn"
          onClick={() => dispatch({ type: "finishQuiz" })}
          ref={nextButtonRef}
        >
          Finish
        </button>
      </div>
    );
  }
}
