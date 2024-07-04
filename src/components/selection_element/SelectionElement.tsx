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
}

const SelectionElement = ({
  fontColor,
  bgColor,
  letter,
  label,
  activeSelection,
  setActiveSelection,
  isCorrect,
  displayResult,
  error,
  setError,
}: SelectionElementProps) => {
  const handleSelection = () => {
    if (!displayResult) {
      setActiveSelection(label);

      if (error) {
        setError("");
      }
    }
  };

  return (
    <div
      className={`
      ${styles.selection_container} 
      ${bgColor} ${activeSelection === label && styles.is_active}
      ${displayResult && styles.disabled}
      `}
      onClick={handleSelection}
    >
      <div className={styles.letter_label}>
        <div className={`${styles.selection_letter} heading-s`}>{letter}</div>
        <div className={`${styles.selection_label} ${fontColor}`}>{label}</div>
      </div>
      <div className={styles.result}>
        {displayResult && isCorrect ? (
          <img src={correct_icon} alt="correct_icon" />
        ) : displayResult && !isCorrect ? (
          <img src={incorrect_icon} alt="incorrect_icon" />
        ) : null}
      </div>
    </div>
  );
};

export default SelectionElement;
