import React  from "react";
import ThemeToggle from "../theme_toggle/ThemeToggle.tsx";
import styles from "./Navbar.module.css";

import html_icon from "../../../public/assets/images/icon-html.svg";
import css_icon from "../../../public/assets/images/icon-css.svg";
import js_icon from "../../../public/assets/images/icon-js.svg";
import accessibility_icon from "../../../public/assets/images/icon-accessibility.svg";

interface NavbarProps {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
  selectedQuiz: string;
}

const Navbar = ({ isDark, setIsDark, selectedQuiz }:NavbarProps) => {

  const renderQuizCategory = (selectedQuiz: string) => {
    switch (selectedQuiz) {
      case "HTML":
        return (
            <>
              <div className={`${styles.img_container} ${styles.html}`}>
                <img src={html_icon} alt="html icon"/>
              </div>
              <h4 className={isDark ? 'dark_element_text' : 'light_element_text'}>HTML</h4>
            </>
        )
      case "CSS":
        return (
            <>
              <div className={`${styles.img_container} ${styles.css}`}>
                <img src={css_icon} alt="css icon"/>
              </div>
              <h4 className={isDark ? 'dark_element_text' : 'light_element_text'}>CSS</h4>
            </>
        )
      case "Javascript":
        return (
            <>
              <div className={`${styles.img_container} ${styles.javascript}`}>
                <img src={js_icon} alt="javascript icon"/>
              </div>
              <h4 className={isDark ? 'dark_element_text' : 'light_element_text'}>Javascript</h4>
            </>
        )
      case "Accessibility":
        return (
            <>
              <div className={`${styles.img_container} ${styles.accessibility}`}>
                <img src={accessibility_icon} alt="accessibility icon"/>
              </div>
              <h4 className={isDark ? 'dark_element_text' : 'light_element_text'}>Accessibility</h4>
            </>
        )
      default:
        return <img src={""} alt={""} />
    }
  }


  return (
      <div className={styles.nav_container}>
        <div className={styles.heading}>
          {renderQuizCategory(selectedQuiz)}
        </div>
        <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
      </div>
  );
};

export default Navbar;
