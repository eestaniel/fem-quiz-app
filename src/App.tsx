import "./reset.css";
import styles from "./App.module.css";
import { useState, useEffect } from "react";
import StartMenu from "./components/start_menu/StartMenu";
import Navbar from "./components/navbar/Navbar";
import data from "./data.json";
import QuizComponent from "./components/quiz_component/QuizComponent.tsx";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [selectedQuiz, setSelectedQuiz] = useState<string>("");
  const [questions, setQuestions] = useState<any[]>([]);

  const handleSetSelectedQuiz = (quiz: string) => {
    setSelectedQuiz(quiz);
    const selectedQuizData = data.quizzes.find((q) => q.title === quiz);
    if (selectedQuizData) {
      setQuestions(selectedQuizData.questions);
    } else {
      setQuestions([]);
    }
  };

  const renderSwitch = () => {
    if (selectedQuiz) {
      return (
          <QuizComponent
              isDark={isDark}
              questions={questions}
              selectedQuiz={selectedQuiz}
              setSelectedQuiz={setSelectedQuiz}
          />
      );
    }
    return (
        <StartMenu isDark={isDark} setSelectedQuiz={handleSetSelectedQuiz} />
    );
  };

  const backgroundClass = isDark
      ? `${styles.background} ${styles.backgroundMobileDark} ${styles.backgroundTabletDark} ${styles.backgroundDesktopDark}`
      : `${styles.background} ${styles.backgroundMobileLight} ${styles.backgroundTabletLight} ${styles.backgroundDesktopLight}`;

  useEffect(() => {
    // Add appropriate classes for dark mode
    const className = isDark ? "dark" : "light";
    document.body.classList.remove("dark", "light");
    document.body.classList.add(className);
  }, [isDark]);

  useEffect(() => {
    console.log(questions);
  }, [questions]);

  return (
      <main>
        <div className={backgroundClass} />
        <Navbar
            isDark={isDark}
            setIsDark={setIsDark}
            selectedQuiz={selectedQuiz}
        />
        {renderSwitch()}
      </main>
  );
}

export default App;
