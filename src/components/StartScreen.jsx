import "../styles/StartScreen.css";

export default function StartScreen({ dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz</h2>
      <h3>15 questions to test your React mastery</h3>
      <button onClick={() => dispatch({ type: "startQuiz" })} className="btn">
        Let's start
      </button>
    </div>
  );
}
