import "../styles/Options.css";

export default function Options({ question }) {
  return question.options.map((option, index) => (
    <button
      className={`btn-option ${
        question.correctOption === index ? "correct" : "answer"
      }`}
      key={option}
    >
      {option}
    </button>
  ));
}
