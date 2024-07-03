import styles from "./ThemeToggle.module.css";
import moon_dark_icon from "../../../public/assets/images/icon-moon-dark.svg";
import moon_light_icon from "../../../public/assets/images/icon-moon-light.svg";
import sun_dark_icon from "../../../public/assets/images/icon-sun-dark.svg";
import sun_light_icon from "../../../public/assets/images/icon-sun-light.svg";
import React from "react";

interface ThemeToggleProps {
  isDark: boolean;
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDark, setIsDark }) => {
  const handleToggleTheme = () => {
    setIsDark(!isDark);
  };


  return (
    <div className={`${styles.theme_container} ${isDark? styles.darkTheme: styles.lightTheme}`} onClick={handleToggleTheme}>
      <div className={styles.toggle_group}>
        <img src={isDark? moon_light_icon: moon_dark_icon} alt="" />
        <div
          className={`${styles.toggle} ${isDark ? styles.isNightMode : styles.isDayMode}`}
        >
          <div className={styles.toggle_circle}></div>
        </div>
        <img src={isDark? sun_light_icon:sun_dark_icon } alt="" />
      </div>
    </div>
  );
};

export default ThemeToggle;
