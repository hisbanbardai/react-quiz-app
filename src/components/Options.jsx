import "../styles/Options.css";

export default function Options({ question, answer, dispatch }) {
  return question.options.map((option, index) => (
    <button
      className={`btn-option ${
        answer !== null
          ? question.correctOption === index
            ? "correct"
            : "wrong"
          : ""
      } ${answer === index ? "answer" : ""}`}
      key={option}
      onClick={() => dispatch({ type: "answerSelected", payLoad: index })}
      disabled={answer !== null}
    >
      {option}
    </button>
  ));
}
