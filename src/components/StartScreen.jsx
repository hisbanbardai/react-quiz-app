import "../styles/StartScreen.css";

export default function StartScreen({ children, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz</h2>
      {children}
      <button onClick={() => dispatch({ type: "startQuiz" })} className="btn">
        Let's start
      </button>
    </div>
  );
}
