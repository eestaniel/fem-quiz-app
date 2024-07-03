import React, { useState } from "react";
import ThemeToggle from "../theme_toggle/ThemeToggle.tsx";
import styles from "./Navbar.module.css";

interface NavbarProps {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
  selectedQuiz: string;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, setIsDark, selectedQuiz }) => {
  return (
      <div className={styles.nav_container}>
        <div className={styles.heading}></div>
        <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
      </div>
  );
};

export default Navbar;
