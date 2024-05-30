import { useRef } from "react";

export default function PreviousButton({ currentQuestionIndex }) {
  const previousButtonRef = useRef(null);

  return (
    currentQuestionIndex > 0 && (
      <button
        className="btn"
        // onClick={() => dispatch({ type: "nextQuestion" })}
        ref={previousButtonRef}
      >
        Previous
      </button>
    )
  );
}
