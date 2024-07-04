import React  from "react";
import ThemeToggle from "../theme_toggle/ThemeToggle.tsx";
import styles from "./Navbar.module.css";
import QuizIconCategory from "../../utils/QuizIconCategory.tsx";

interface NavbarProps {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
  selectedQuiz: string;
}

const Navbar = ({ isDark, setIsDark, selectedQuiz }:NavbarProps) => {




  return (
      <div className={styles.nav_container}>
          {QuizIconCategory({ isDark, quizType: selectedQuiz })}
        <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
      </div>
  );
};

export default Navbar;
