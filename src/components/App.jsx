import { useReducer } from "react";
import "../styles/App.css";
import Error from "./Error";
import Header from "./Header";
import Loader from "./Loader";
import Main from "./Main";

const initialState = {
  status: "loading",
};

function reducer(state, action) {}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="app">
      <Header />

      {state.status === "loading" && <Loader />}

      {/* <Main />
      <Error /> */}
    </div>
  );
}

export default App;
