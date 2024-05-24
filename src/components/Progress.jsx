import "../styles/Progress.css";

export default function Progress() {
  return (
    <div className="progress-container">
      <progress max={"15"} value={"1"}></progress>
      <div className="progress-details">
        <p>
          Question <b>1</b>/15
        </p>
        <p>
          <b>0</b>/280 points
        </p>
      </div>
    </div>
  );
}
