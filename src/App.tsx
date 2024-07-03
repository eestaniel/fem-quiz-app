import "./reset.css";
import styles from "./App.module.css";
import { useState, useEffect } from "react";
import StartMenu from "./components/start_menu/StartMenu.tsx";
import Navbar from "./components/navbar/Navbar.tsx";
import pattern_bg_mobile_dark from "../public/assets/images/pattern-background-mobile-dark.svg";
import pattern_bg_mobile_light from "../public/assets/images/pattern-background-mobile-light.svg";
import pattern_bg_tablet_dark from "../public/assets/images/pattern-background-tablet-dark.svg";
import pattern_bg_tablet_light from "../public/assets/images/pattern-background-tablet-light.svg";
import pattern_bg_desktop_dark from "../public/assets/images/pattern-background-desktop-dark.svg";
import pattern_bg_desktop_light from "../public/assets/images/pattern-background-desktop-light.svg";


function App() {
  const [isDark, setIsDark] = useState(false);

  const [selectedQuiz, setSelectedQuiz] = useState("");

  useEffect(() => {
    document.body.className = isDark ? "dark" : "light";

  }, [isDark]);

  const renderSwitch = (selectedQuiz: string): JSX.Element => {
    switch (selectedQuiz) {
      default:
        return <StartMenu isDark={isDark} setSelectedQuiz={setSelectedQuiz} />;
    }
  };

  return (
      <main>
        <img className={styles.background} src={isDark ? pattern_bg_mobile_dark: pattern_bg_mobile_light} alt=""/>
        <Navbar isDark={isDark} setIsDark={setIsDark} selectedQuiz={selectedQuiz}/>
        {renderSwitch(selectedQuiz)}
      </main>
  )

}

export default App;
