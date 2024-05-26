import "../styles/FinishScreen.css";

export default function FinishScreen({ points, totalPoints }) {
  const percentage = Math.round((points / totalPoints) * 100);

  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {totalPoints} ({percentage}
        %)
      </p>
      <div className="restart">
        <button className="btn">Restart Quiz</button>
      </div>
    </>
  );
}
