import { useRef } from "react";

export default function PreviousButton() {
  const previousButtonRef = useRef(null);

  return (
    <div className="next">
      <button
        className="btn"
        // onClick={() => dispatch({ type: "nextQuestion" })}
        ref={previousButtonRef}
      >
        Previous
      </button>
    </div>
  );
}
