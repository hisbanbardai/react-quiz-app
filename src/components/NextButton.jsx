import "../styles/NextButton.css";

export default function NextButton({ dispatch, selectedAnswerIndex }) {
  return (
    selectedAnswerIndex !== null && (
      <div className="next">
        <button
          className="btn"
          onClick={() => dispatch({ type: "nextQuestion" })}
        >
          Next
        </button>
      </div>
    )
  );
}
