import { useReducer } from "react";
import "../styles/App.css";
import Error from "./Error";
import Header from "./Header";
import Loader from "./Loader";
import Main from "./Main";
import { useEffect } from "react";

const initialState = {
  status: "loading",
  questions: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, status: "received", questions: action.payLoad };

    case "errorReceived":
      return { ...state, status: "error" };
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

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
      {state.status === "loading" && <Loader />}
      {state.status === "error" && <Error />}
      {state.status === "received" && <Main />}
    </div>
  );
}

export default App;
