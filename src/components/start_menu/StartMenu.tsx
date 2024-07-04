import styles from "./StartMenu.module.css";
import QuizIconCategory from "../../utils/QuizIconCategory.tsx";

interface StartMenuProps {
  setSelectedQuiz: (quiz: string) => void;
  isDark: boolean;
}

const StartMenu = ({ setSelectedQuiz, isDark }: StartMenuProps) => {
  const handleSelectQuiz = (quiz: string) => {
    setSelectedQuiz(quiz);
  };
  return (
    <div className={styles.container}>
      <header>
        <div className={styles.heading}>
          <h1
            className={`${isDark ? "dark_element_text" : "light_element_text"}`}
          >
            Welcome to the
          </h1>
          <h2
            className={`${isDark ? "dark_element_text" : "light_element_text"}`}
          >
            Frontend Quiz!
          </h2>
        </div>
        <p
          className={`${isDark ? "dark_number_header_text" : "light_number_header_text"}`}
        >
          Pick a subject to get started.
        </p>
      </header>
      <section>
        <div
          className={`${styles.selection} ${isDark ? "dark_element_bg" : "light_element_bg"}`}
          onClick={() => handleSelectQuiz("HTML")}
        >
          {QuizIconCategory({ isDark, quizType: "HTML" })}
        </div>
        <div
          className={`${styles.selection} ${isDark ? "dark_element_bg" : "light_element_bg"}`}
          onClick={() => handleSelectQuiz("CSS")}
        >
          {QuizIconCategory({ isDark, quizType: "CSS" })}
        </div>
        <div
          className={`${styles.selection} ${isDark ? "dark_element_bg" : "light_element_bg"}`}
          onClick={() => handleSelectQuiz("JavaScript")}
        >
          {QuizIconCategory({ isDark, quizType: "JavaScript" })}
        </div>
        <div
          className={`${styles.selection} ${isDark ? "dark_element_bg" : "light_element_bg"}`}
          onClick={() => handleSelectQuiz("Accessibility")}
        >
          {QuizIconCategory({ isDark, quizType: "Accessibility" })}
        </div>
      </section>
    </div>
  );
};

export default StartMenu;
