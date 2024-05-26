import "../styles/FinishScreen.css";

export default function FinishScreen() {
  return (
    <>
      <p className="result">
        You scored <strong>20</strong> out of 280 (50%)
      </p>
      <div className="restart">
        <button className="btn">Restart Quiz</button>
      </div>
    </>
  );
}
