export default function Progress() {
  return (
    <div className="progress-container">
      <progress max={"15"} value={"1"}></progress>
      <div className="progress-details">
        <p>Question 1/15</p>
        <p>0/280 points</p>
      </div>
    </div>
  );
}
