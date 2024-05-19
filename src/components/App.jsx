import "../styles/App.css";
import Error from "./Error";
import Header from "./Header";
import Loader from "./Loader";
import Main from "./Main";

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Loader />
      <Error />
    </div>
  );
}

export default App;
