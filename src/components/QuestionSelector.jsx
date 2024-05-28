export default function QuestionSelector() {
  return (
    <>
      <p className="questions-label">Select number of questions:</p>
      <input type="range" max={5} className="questions-range" />
      <p className="questions-total">Question(s): 5</p>
    </>
  );
}
