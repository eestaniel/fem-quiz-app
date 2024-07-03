import "./reset.css";
import styles from "./App.module.css";
import { useState, useEffect } from "react";
import StartMenu from "./components/start_menu/StartMenu";
import Navbar from "./components/navbar/Navbar";
import pattern_bg_mobile_dark from "../public/assets/images/pattern-background-mobile-dark.svg";
import pattern_bg_mobile_light from "../public/assets/images/pattern-background-mobile-light.svg";
import pattern_bg_tablet_dark from "../public/assets/images/pattern-background-tablet-dark.svg";
import pattern_bg_tablet_light from "../public/assets/images/pattern-background-tablet-light.svg";
import pattern_bg_desktop_dark from "../public/assets/images/pattern-background-desktop-dark.svg";
import pattern_bg_desktop_light from "../public/assets/images/pattern-background-desktop-light.svg";
import data from "./data.json";
import QuizComponent from "./components/quiz/QuizComponent"; // Make sure to import your QuizComponent

function App() {
  const [isDark, setIsDark] = useState(false);
  const [selectedQuiz, setSelectedQuiz] = useState<string>("");
  const [questions, setQuestions] = useState<any[]>([]);

  const handleSetSelectedQuiz = (quiz: string) => {
    setSelectedQuiz(quiz);
    const selectedQuizData = data.quizzes.find(q => q.title.toLowerCase() === quiz.toLowerCase());
    if (selectedQuizData) {
      setQuestions(selectedQuizData.questions);
    } else {
      setQuestions([]);
    }
  };

  const renderSwitch = (): JSX.Element => {
    if (selectedQuiz) {

    }
    return <StartMenu isDark={isDark} setSelectedQuiz={handleSetSelectedQuiz} />;
  };

  useEffect(() => {
    console.log(questions)
  }, [questions]);

  return (
      <main>
        <img className={styles.background} src={isDark ? pattern_bg_mobile_dark : pattern_bg_mobile_light} alt="background pattern" />
        <Navbar isDark={isDark} setIsDark={setIsDark} selectedQuiz={selectedQuiz} />
        {renderSwitch()}
      </main>
  );
}

export default App;
