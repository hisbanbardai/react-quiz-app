import "../styles/App.css";
import Header from "./Header";
import Loader from "./Loader";
import Main from "./Main";

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Loader />
    </div>
  );
}

export default App;
