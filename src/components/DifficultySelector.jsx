import "../styles/DifficultySelector.css";

export default function DifficultySelector({ dispatch }) {
  return (
    <select
      name="difficulty"
      className="difficulty"
      onChange={(e) =>
        dispatch({ type: "difficultySelected", payLoad: e.target.value })
      }
    >
      <option value="">Select difficulty</option>
      <option value="all">All</option>
      <option value="easy">Easy</option>
      <option value="medium">Medium</option>
      <option value="hard">Hard</option>
    </select>
  );
}
