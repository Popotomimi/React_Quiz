// Context
import { useContext, useEffect } from "react";
import { QuizContext } from "./context/quiz";

// React Router Dom
import { BrowserRouter as Router } from "react-router-dom";

// Components
import Welcome from "./components/Welcome";
import Question from "./components/Question";
import GameOver from "./components/GameOver";
import PickCategory from "./components/PickCategory";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

// CSS
import "./App.css";

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div>
      <Router>
        <Navbar />
        <div className="App">
          <h1>Quiz de Programação</h1>
          {quizState.gameStage === "Start" && <Welcome />}
          {quizState.gameStage === "Category" && <PickCategory />}
          {quizState.gameStage === "Playing" && <Question />}
          {quizState.gameStage === "End" && <GameOver />}
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
