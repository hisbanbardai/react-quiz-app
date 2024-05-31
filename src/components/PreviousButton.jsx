import { useRef } from "react";

export default function PreviousButton({ currentQuestionIndex, dispatch }) {
  return (
    currentQuestionIndex > 0 && (
      <button
        className="btn"
        onClick={() => dispatch({ type: "previousQuestion" })}
      >
        Previous
      </button>
    )
  );
}
