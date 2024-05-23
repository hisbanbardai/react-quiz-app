import Options from "./Options";
import "../styles/Question.css";

export default function Question({ question, answer, dispatch }) {
  return (
    <div>
      <h4>{question.question}</h4>
      <div className="options">
        <Options question={question} answer={answer} dispatch={dispatch} />
      </div>
    </div>
  );
}
