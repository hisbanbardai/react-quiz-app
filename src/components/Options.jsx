import "../styles/Options.css";

export default function Options({ question, answer }) {
  return question.options.map((option, index) => (
    <button
      className={`btn-option ${
        answer ? (question.correctOption === index ? "correct" : "answer") : ""
      }`}
      key={option}
    >
      {option}
    </button>
  ));
}
