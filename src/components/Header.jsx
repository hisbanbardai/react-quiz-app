import logo from "../assets/images/React-logo.png";
import "../styles/Header.css";

export default function Header() {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="React logo" />
      <h1>THE REACT QUIZ</h1>
    </header>
  );
}
