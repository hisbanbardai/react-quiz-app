export default function Options({ options }) {
  return options.map((option) => (
    <button className="btn-option" key={option}>
      {option}
    </button>
  ));
}
