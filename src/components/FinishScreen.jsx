import "../styles/FinishScreen.css";

export default function FinishScreen({
  points,
  totalPoints,
  dispatch,
  highScore,
}) {
  const percentage = Math.round((points / totalPoints) * 100);

  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {totalPoints} ({percentage}
        %)
      </p>
      <p className="highscore">(Highscore: {highScore} points)</p>
      <div className="restart">
        <button
          onClick={() => dispatch({ type: "restartQuiz" })}
          className="btn"
        >
          Restart Quiz
        </button>
      </div>
    </>
  );
}
