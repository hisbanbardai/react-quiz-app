import "../styles/Progress.css";

export default function Progress({
  numOfQuestions,
  currentQuestionIndex,
  points,
  totalPoints,
  selectedAnswerIndex,
}) {
  return (
    <div className="progress-container">
      <progress
        max={numOfQuestions}
        value={selectedAnswerIndex !== null && currentQuestionIndex + 1}
      ></progress>
      <div className="progress-details">
        <p>
          Question <b>{currentQuestionIndex + 1}</b>/{numOfQuestions}
        </p>
        <p>
          <b>{points}</b>/{totalPoints} points
        </p>
      </div>
    </div>
  );
}
