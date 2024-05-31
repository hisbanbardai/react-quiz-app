import { useReducer } from "react";
import "../styles/App.css";
import "../styles/Footer.css";
import Error from "./Error";
import Header from "./Header";
import Loader from "./Loader";
import Main from "./Main";
import StartScreen from "./StartScreen";
import { useEffect } from "react";
import Question from "./Question";
import NextButton from "./NextButton";
import FinishScreen from "./FinishScreen";
import Progress from "./Progress";
import Timer from "./Timer";
import DifficultySelector from "./DifficultySelector";
import QuestionSelector from "./QuestionSelector";
import PreviousButton from "./PreviousButton";

const API_URL = import.meta.env.VITE_API_URL;

const initialState = {
  status: "loading",
  questions: [],
  currentQuestionIndex: 0,
  selectedAnswerIndex: null,
  points: 0,
  highScore: 0,
  difficulty: "",
  selectedQuestions: [],
  currentNumOfQuestions: 0,
  answers: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        status: "received",
        questions: action.payLoad,
        currentNumOfQuestions: action.payLoad.length,
      };

    case "errorReceived":
      return { ...state, status: "error" };

    case "difficultySelected":
      return {
        ...state,
        difficulty: action.payLoad,
      };

    case "updateSelectedQuestions":
      return {
        ...state,
        selectedQuestions: action.payLoad,
        currentNumOfQuestions: action.payLoad.length,
      };

    case "updateNumOfQuestions":
      return {
        ...state,
        currentNumOfQuestions: action.payLoad,
      };

    case "startQuiz":
      return { ...state, status: "active" };

    case "answerSelected":
      return {
        ...state,
        selectedAnswerIndex: action.payLoad,
        answers: [...state.answers, action.payLoad],
        points:
          action.payLoad ===
          state.selectedQuestions[state.currentQuestionIndex].correctOption
            ? state.points +
              state.selectedQuestions[state.currentQuestionIndex].points
            : state.points,
      };

    case "previousQuestion":
      console.log(state.currentQuestionIndex);
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex - 1,
        selectedAnswerIndex: state.answers[state.currentQuestionIndex - 1],
      };

    case "nextQuestion":
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        selectedAnswerIndex:
          state.answers[state.currentQuestionIndex + 1] !== undefined
            ? state.answers[state.currentQuestionIndex + 1]
            : null,
      };

    case "finishQuiz":
      return {
        ...state,
        status: "finished",
        currentQuestionIndex: 0,
        selectedAnswerIndex: null,
        highScore:
          state.points > state.highScore ? state.points : state.highScore,
      };

    case "restartQuiz":
      return {
        ...initialState,
        questions: state.questions,
        status: "received",
        highScore: state.highScore,
      };

    default:
      console.error("Unknown action type");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const {
    status,
    questions,
    currentQuestionIndex,
    selectedAnswerIndex,
    points,
    highScore,
    difficulty,
    selectedQuestions,
    currentNumOfQuestions,
  } = state;

  //Calculation total points based on current number of questions
  const totalPoints =
    selectedQuestions.length !== 0 &&
    selectedQuestions
      .slice(0, currentNumOfQuestions)
      .reduce((acc, question) => acc + Number(question.points), 0);

  useEffect(function () {
    async function fetchData() {
      try {
        const res = await fetch(`${API_URL}/questions`);
        // console.log(res);

        if (!res.ok) throw new Error("Unable to fetch data");

        const data = await res.json();
        // console.log(data);
        dispatch({ type: "dataReceived", payLoad: data });
      } catch (error) {
        console.error(error.message);
        dispatch({ type: "errorReceived" });
      }
    }

    fetchData();
  }, []);

  useEffect(
    function () {
      let filteredQuestions = questions;

      if (difficulty && difficulty.toLowerCase() !== "all") {
        filteredQuestions = questions.filter(
          (question) => question.difficulty.toLowerCase() === difficulty
        );
      }
      dispatch({
        type: "updateSelectedQuestions",
        payLoad: filteredQuestions,
      });
    },
    [difficulty, questions]
  );

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "received" && (
          <StartScreen dispatch={dispatch}>
            <DifficultySelector dispatch={dispatch} />
            <QuestionSelector
              difficulty={difficulty}
              numOfQuestions={currentNumOfQuestions}
              selectedQuestions={selectedQuestions}
              dispatch={dispatch}
            />
          </StartScreen>
        )}
        {status === "active" && (
          <>
            <Progress
              numOfQuestions={currentNumOfQuestions}
              currentQuestionIndex={currentQuestionIndex}
              points={points}
              totalPoints={totalPoints}
              selectedAnswerIndex={selectedAnswerIndex}
            />
            <Timer numOfQuestions={currentNumOfQuestions} dispatch={dispatch} />
            <Question
              question={selectedQuestions[currentQuestionIndex]}
              answer={selectedAnswerIndex}
              dispatch={dispatch}
            />
            <footer className="footer">
              <PreviousButton
                currentQuestionIndex={currentQuestionIndex}
                dispatch={dispatch}
              />
              <NextButton
                dispatch={dispatch}
                selectedAnswerIndex={selectedAnswerIndex}
                numOfQuestions={currentNumOfQuestions}
                currentQuestionIndex={currentQuestionIndex}
              />
            </footer>
          </>
        )}
        {status === "finished" && (
          <FinishScreen
            points={points}
            totalPoints={totalPoints}
            dispatch={dispatch}
            highScore={highScore}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
