import { useState, useEffect, useCallback, useMemo } from "react";
import styles from "./QuizComponent.module.css";
import SelectionElement from "../selection_element/SelectionElement";
import CustomButton from "../custom_button/CustomButton";
import QuizIconCategory from "../../utils/QuizIconCategory";
import React from "react";

interface Question {
  question: string;
  options: string[];
  answer: string;
}

interface QuizComponentProps {
  isDark: boolean;
  questions: Question[];
  selectedQuiz: string;
  setSelectedQuiz: React.Dispatch<React.SetStateAction<string>>;
}

const QuizComponent: React.FC<QuizComponentProps> = ({
                                                       isDark,
                                                       questions,
                                                       selectedQuiz,
                                                       setSelectedQuiz,
                                                     }) => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(1);
  const [progress, setProgress] = useState<number>(1);
  const [activeSelection, setActiveSelection] = useState<string>("");
  const [checkAnswer, setCheckAnswer] = useState<boolean>(false);
  const [correctAnswer, setCorrectAnswer] = useState<string>("");
  const [amountCorrect, setAmountCorrect] = useState<number>(0);
  const [error, setError] = useState<string>("");
  const [showResults, setShowResults] = useState<boolean>(false);

  useEffect(() => {
    if (questions.length > 0) {
      setProgress((currentQuestion / questions.length) * 100);
    }
  }, [currentQuestion, questions.length]);

  const renderQuestion = useMemo(() => {
    if (questions.length > 0) {
      if (!correctAnswer) {
        setCorrectAnswer(questions[currentQuestion - 1].answer);
      }

      return (
          <p className={`${styles.question} ${isDark ? "dark_element_text" : "light_element_text"}`}>
            {questions[currentQuestion - 1].question}
          </p>
      );
    }
    return <p>There are no questions</p>;
  }, [questions, currentQuestion, correctAnswer, isDark]);

  const getAnswers = useCallback(() => {
    const letterArray = ["A", "B", "C", "D"];
    if (questions.length > 0) {
      return questions[currentQuestion - 1].options.map((option, index) => (
          <li key={index}>
            <SelectionElement
                letter={letterArray[index]}
                label={option}
                activeSelection={activeSelection}
                setActiveSelection={setActiveSelection}
                displayResult={checkAnswer}
                isCorrect={option === correctAnswer}
                error={error}
                setError={setError}
                isDark={isDark ? "dark_element_bg" : "light_element_bg"}
                fontColor={isDark ? "dark_element_text" : "light_element_text"}
                bgColor={isDark ? "dark_element_bg" : "light_element_bg"}
            />
          </li>
      ));
    }
    return <p>There are no questions</p>;
  }, [questions, currentQuestion, activeSelection, checkAnswer, correctAnswer, error, isDark]);

  const handleSubmission = useCallback(() => {
    if (!activeSelection) {
      setError("Please select an answer");
      return;
    }
    if (activeSelection === correctAnswer) {
      setAmountCorrect((prev: number) => prev + 1);
    }
    setCheckAnswer(true);
  }, [activeSelection, correctAnswer]);

  const handleNextQuestion = useCallback(() => {
    if (currentQuestion < questions.length) {
      setCurrentQuestion((prev: number) => prev + 1);
      setActiveSelection("");
      setCorrectAnswer("");
      setCheckAnswer(false);
      setError("");
    }
  }, [currentQuestion, questions.length]);

  const handleResults = useCallback(() => {
    setShowResults(true);
  }, []);

  const renderButton = useMemo(() => {
    if (!checkAnswer) {
      return <CustomButton label={"Submit Answer"} handleSubmission={handleSubmission} />;
    } else {
      if (progress === 100) {
        return <CustomButton label={"View Results"} handleSubmission={handleResults} />;
      } else {
        return <CustomButton label={"Next Question"} handleSubmission={handleNextQuestion} />;
      }
    }
  }, [checkAnswer, progress, handleSubmission, handleResults, handleNextQuestion]);

  const handleGoToStartMenu = useCallback(() => {
    setSelectedQuiz("");
  }, [setSelectedQuiz]);

  const renderQuiz = () => (
      <>
        <header>
          <div className={styles.number_question}>
            <p className={`${styles.number} ${isDark ? "dark_number_header_text" : "light_number_header_text"}`}>
              Question {currentQuestion} of {questions.length}
            </p>
            {renderQuestion}
          </div>
          <div className={`${styles.progress_container} ${isDark ? "dark_element_bg" : "light_element_bg"}`}>
            <div className={styles.progress} style={{ width: `${progress}%` }}></div>
          </div>
        </header>
        <div className={styles.content}>
          <ul className={styles.options}>{getAnswers()}</ul>
          {renderButton}
          {error && (
              <div className={styles.error_group}>
                <img src="/assets/images/icon-error.svg" alt="error icon" />
                <p className={`${styles.error_message} ${isDark ? "dark_error_text" : "light-error-text"}`}>
                  {error}
                </p>
              </div>
          )}
        </div>
      </>
  );

  const renderResults = () => (
      <div className={styles.results}>
        <header>
          <h2 className={`${styles.results_header_1} ${isDark ? "dark_element_text" : "light_element_text"}`}>
            Quiz completed
          </h2>
          <h2 className={`${styles.results_header_2} ${isDark ? "dark_element_text" : "light_element_text"}`}>
            You scored...
          </h2>
        </header>
        <section className={styles.score_container}>
          <div className={`${styles.score_group} ${isDark ? "dark_progress_bg" : "light_progress_bg"}`}>
            <div className={styles.icon_container}>
              {QuizIconCategory({ isDark, quizType: selectedQuiz })}
            </div>
            <div className={styles.score_text_group}>
              <p className={`${styles.score} ${isDark ? "dark_element_text" : "light_element_text"}`}>
                {amountCorrect}
              </p>
              <p className={`${styles.score_out_of} ${isDark ? "dark_number_header_text" : "light_number_header_text"}`}>
                out of {questions.length}
              </p>
            </div>
          </div>
          <CustomButton label={"Play Again"} handleSubmission={handleGoToStartMenu} />
        </section>
      </div>
  );

  return <div className={styles.container}>{showResults ? renderResults() : renderQuiz()}</div>;
};

export default QuizComponent;
