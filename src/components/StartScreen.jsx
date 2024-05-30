import "../styles/StartScreen.css";

export default function StartScreen({ children, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "startQuiz" });
        }}
      >
        {children}
        <button className="btn">Let's start</button>
      </form>
    </div>
  );
}
