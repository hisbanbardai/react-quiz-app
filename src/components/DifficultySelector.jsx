import "../styles/DifficultySelector.css";

export default function DifficultySelector() {
  return (
    <select name="difficulty" className="difficulty">
      <option value="">Select difficulty</option>
      <option value="all">All</option>
      <option value="easy">Easy</option>
      <option value="medium">Medium</option>
      <option value="hard">Hard</option>
    </select>
  );
}
