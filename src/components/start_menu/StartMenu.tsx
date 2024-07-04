import styles from "./StartMenu.module.css";

interface StartMenuProps {
  setSelectedQuiz: (quiz: string) => void;
  isDark: boolean;
}

const StartMenu = ({ setSelectedQuiz, isDark }: StartMenuProps) => {

  const handleSelectQuiz = (quiz: string) => {
    console.log(quiz)
    setSelectedQuiz(quiz);
  }
  return (
      <div className={styles.container}>
        <header>
          <div className={styles.heading}>
            <h1 className={`${isDark ? 'dark_element_text' : 'light_element_text'}`}>Welcome to the</h1>
            <h2 className={`${isDark ? 'dark_element_text' : 'light_element_text'}`}>Frontend Quiz!</h2>
          </div>
          <p  className={`${isDark ? 'dark_number_header_text' : 'light_number_header_text'}`}>Pick a subject to get started.</p>
        </header>
        <section>
          <div className={`${styles.selection} ${isDark ? 'dark_element_bg' : 'light_element_bg'}`}
               onClick={() => handleSelectQuiz("HTML")}
          >
            <div className={`${styles.img_container} ${styles.html}`}>
              <img
                  src="../../../public/assets/images/icon-html.svg"
                  alt="html icon"
              />
            </div>
            <h3 className={`${isDark ? 'dark_element_text' : 'light_element_text'}`}>HTML</h3>
          </div>
          <div className={`${styles.selection} ${isDark ? 'dark_element_bg' : 'light_element_bg'}`}
               onClick={() => handleSelectQuiz("CSS")}
          >
            <div className={`${styles.img_container} ${styles.css}`}>
              <img
                  src="../../../public/assets/images/icon-css.svg"
                  alt="css icon"
              />
            </div>
            <h3 className={`${isDark ? 'dark_element_text' : 'light_element_text'}`}>CSS</h3>
          </div>
          <div
              className={`${styles.selection} ${isDark ? 'dark_element_bg' : 'light_element_bg'}`}
              onClick={() => handleSelectQuiz("JavaScript")}
          >
            <div className={`${styles.img_container} ${styles.javascript}`}>
              <img
                  src="../../../public/assets/images/icon-js.svg"
                  alt="javascript icon"
              />
            </div>
            <h3 className={`${isDark ? 'dark_element_text' : 'light_element_text'}`}>Javascript</h3>
          </div>
          <div
              className={`${styles.selection} ${isDark ? 'dark_element_bg' : 'light_element_bg'}`}
              onClick={() => handleSelectQuiz("Accessibility")}
          >
            <div className={`${styles.img_container} ${styles.accessibility}`}>
              <img
                  src="../../../public/assets/images/icon-accessibility.svg"
                  alt="accessibility icon"
              />
            </div>
            <h3 className={`${isDark ? 'dark_element_text' : 'light_element_text'}`}>Accessibility</h3>
          </div>
        </section>
      </div>
  );
};

export default StartMenu;
