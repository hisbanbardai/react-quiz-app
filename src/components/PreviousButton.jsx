import { useRef } from "react";

export default function PreviousButton() {
  const previousButtonRef = useRef(null);

  return (
    <button
      className="btn"
      // onClick={() => dispatch({ type: "nextQuestion" })}
      ref={previousButtonRef}
    >
      Previous
    </button>
  );
}
