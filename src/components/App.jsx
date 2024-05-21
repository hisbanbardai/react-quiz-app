import { useReducer } from "react";
import "../styles/App.css";
import Error from "./Error";
import Header from "./Header";
import Loader from "./Loader";
import Main from "./Main";
import StartScreen from "./StartScreen";
import { useEffect } from "react";
import Question from "./Question";

const initialState = {
  status: "loading",
  questions: [],
  currentQuestionIndex: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, status: "received", questions: action.payLoad };

    case "errorReceived":
      return { ...state, status: "error" };

    case "startQuiz":
      return { ...state, status: "active" };
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { status, questions, currentQuestionIndex } = state;

  useEffect(function () {
    async function fetchData() {
      try {
        const res = await fetch("/api/questions");
        console.log(res);

        if (!res.ok) throw new Error("Unable to fetch data");

        const data = await res.json();
        console.log(data);
        dispatch({ type: "dataReceived", payLoad: data });
      } catch (error) {
        console.error(error.message);
        dispatch({ type: "errorReceived" });
      }
    }

    fetchData();
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "received" && <StartScreen dispatch={dispatch} />}
        {status === "active" && (
          <Question question={questions[currentQuestionIndex]} />
        )}
      </Main>
    </div>
  );
}

export default App;
