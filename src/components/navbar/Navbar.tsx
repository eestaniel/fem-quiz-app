import React from "react";
import ThemeToggle from "../theme_toggle/ThemeToggle";
import styles from "./Navbar.module.css";
import QuizIconCategory from "../../utils/QuizIconCategory";

interface NavbarProps {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
  selectedQuiz: string;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, setIsDark, selectedQuiz }) => {
  return (
    <div className={styles.nav_container}>
      {QuizIconCategory({ isDark, quizType: selectedQuiz })}
      <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
    </div>
  );
};

export default Navbar;
