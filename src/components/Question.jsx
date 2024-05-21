import Options from "./Options";
import "../styles/Question.css";

export default function Question({ question }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <div className="options">
        <Options options={question.options} />
      </div>
    </div>
  );
}
