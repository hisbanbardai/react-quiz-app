import { useEffect, useState } from "react";
import "../styles/Timer.css";

export default function Timer() {
  const [timer, setTimer] = useState(10000);

  useEffect(function () {
    const id = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return <span className="timer">{timer}</span>;
}
