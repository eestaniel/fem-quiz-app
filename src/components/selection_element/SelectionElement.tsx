import React from "react";
import styles from "./SelectionElement.module.css";
import correct_icon from "../../../public/assets/images/icon-correct.svg";
import incorrect_icon from "../../../public/assets/images/icon-incorrect.svg";

interface SelectionElementProps {
  letter: string;
  label: string;
  activeSelection: string;
  setActiveSelection: React.Dispatch<React.SetStateAction<string>>;
  fontColor: string;
  bgColor: string;
  isCorrect?: boolean;
  displayResult?: boolean;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
  isDark: string;
}

const SelectionElement: React.FC<SelectionElementProps> = React.memo(({
                                                                        fontColor,
                                                                        isDark,
                                                                        letter,
                                                                        label,
                                                                        activeSelection,
                                                                        setActiveSelection,
                                                                        isCorrect,
                                                                        displayResult,
                                                                        error,
                                                                        setError,
                                                                      }) => {
  const handleSelection = () => {
    if (!displayResult) {
      setActiveSelection(label);
      if (error) {
        setError("");
      }
    }
  };

  const showCorrectIcon = displayResult && isCorrect;
  const showIncorrectIcon = displayResult && !isCorrect && activeSelection === label;

  return (
      <div
          className={`
        ${styles.selection_container}
        ${activeSelection === label && !displayResult ? styles.is_active : ""}
        ${showCorrectIcon || showIncorrectIcon ? (isCorrect ? styles.correct : styles.incorrect) : ""}
        ${displayResult ? styles.disabled : ""}
        ${isDark}
      `}
          onClick={handleSelection}
      >
        <div className={styles.letter_label}>
          <div className={`${styles.selection_letter} heading-s`}>{letter}</div>
          <div className={`${styles.selection_label} ${fontColor}`}>{label}</div>
        </div>
        <div className={styles.result}>
          {showCorrectIcon ? (
              <img src={correct_icon} alt="Correct" />
          ) : showIncorrectIcon ? (
              <img src={incorrect_icon} alt="Incorrect" />
          ) : null}
        </div>
      </div>
  );
});

export default SelectionElement;
