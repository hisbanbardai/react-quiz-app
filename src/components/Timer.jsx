import { useEffect, useState } from "react";
import "../styles/Timer.css";

export default function Timer({ numOfQuestions, dispatch }) {
  const [timer, setTimer] = useState(numOfQuestions ? numOfQuestions * 60 : 0);

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  useEffect(function () {
    const id = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <span className="timer">
      {minutes < 10 ? "0" + minutes : minutes}:
      {seconds < 10 ? "0" + seconds : seconds}
    </span>
  );
}
