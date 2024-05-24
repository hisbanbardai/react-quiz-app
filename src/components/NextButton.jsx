import { useEffect, useRef } from "react";
import "../styles/NextButton.css";

export default function NextButton({ dispatch, selectedAnswerIndex }) {
  const nextButtonRef = useRef(null);

  useEffect(
    function () {
      if (selectedAnswerIndex !== null && nextButtonRef.current !== null) {
        nextButtonRef.current.scrollIntoView({ behavior: "smooth" });
      }
    },
    [selectedAnswerIndex]
  );

  return (
    selectedAnswerIndex !== null && (
      <div className="next">
        <button
          className="btn"
          onClick={() => dispatch({ type: "nextQuestion" })}
          ref={nextButtonRef}
        >
          Next
        </button>
      </div>
    )
  );
}
