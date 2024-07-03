import React, {useState} from 'react';
import styles from './SelectionElement.module.css';
import correct_icon from '../../../public/assets/images/icon-correct.svg'
import incorrect_icon from '../../../public/assets/images/icon-incorrect.svg'


interface SelectionElementProps {
  letter: string;
  label: string;
  activeSelection: string;
  setActiveSelection: React.Dispatch<React.SetStateAction<string>>;
}

const SelectionElement: React.FC<SelectionElementProps> = ({ letter, label, activeSelection, setActiveSelection }) => {

  const [isCorrect, setIsCorrect] = useState('true')


  const handleSelection = () => {
    console.log('Selection clicked');
    setActiveSelection(label);
  }

  return (
      <div
          className={`
          ${styles.selection_container} 
          ${activeSelection === label ? styles.is_active : ''}
          ${(activeSelection === label) && isCorrect==='true' && styles.correct}
          ${(activeSelection === label) && isCorrect==='false' && styles.incorrect}
          `}
          onClick={handleSelection}
      >
        <div className={styles.letter_label}>
          <div className={`${styles.selection_letter} heading-s`}>{letter}</div>
          <div className={styles.selection_label}>{label}</div>
        </div>
        <div className={styles.result}>
          {isCorrect ==='true' && <img src={correct_icon} alt="correct_icon"/>}
          {isCorrect === 'false' && <img src={incorrect_icon} alt="incorrect_icon"/>}
        </div>

      </div>
  );
};

export default SelectionElement;
