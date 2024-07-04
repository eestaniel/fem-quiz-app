import styles from "./StartMenu.module.css";
import QuizIconCategory from "../../utils/QuizIconCategory";

interface StartMenuProps {
  setSelectedQuiz: (quiz: string) => void;
  isDark: boolean;
}

const StartMenu: React.FC<StartMenuProps> = ({ setSelectedQuiz, isDark }) => {
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
        {["HTML", "CSS", "JavaScript", "Accessibility"].map((quiz) => (
          <div
            key={quiz}
            className={`${styles.selection} ${isDark ? "dark_element_bg" : "light_element_bg"}`}
            onClick={() => handleSelectQuiz(quiz)}
          >
            {QuizIconCategory({ isDark, quizType: quiz })}
          </div>
        ))}
      </section>
    </div>
  );
};

export default StartMenu;
