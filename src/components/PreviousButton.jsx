import { useRef } from "react";

export default function PreviousButton({ currentQuestionIndex, dispatch }) {
  const previousButtonRef = useRef(null);

  return (
    currentQuestionIndex > 0 && (
      <button
        className="btn"
        onClick={() => dispatch({ type: "previousQuestion" })}
        ref={previousButtonRef}
      >
        Previous
      </button>
    )
  );
}
