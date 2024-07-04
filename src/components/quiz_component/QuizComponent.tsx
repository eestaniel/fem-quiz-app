import { useState, useEffect } from "react";
import styles from "./QuizComponent.module.css";
import SelectionElement from "../selection_element/SelectionElement.tsx";
import CustomButton from "../custom_button/CustomButton.tsx";

interface Question {
  question: string;
  options: string[];
  answer: string;
}

interface QuizComponentProps {
  isDark: boolean;
  questions: Question[];
}

const QuizComponent = ({ isDark, questions }: QuizComponentProps) => {
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

  const renderQuestion = () => {
    if (questions.length > 0) {
      if (!correctAnswer) {
        setCorrectAnswer(questions[currentQuestion - 1].answer);
        console.log(questions[currentQuestion - 1].answer);
      }

      return (
        <p
          className={`${styles.question} ${isDark ? "dark_element_text" : "light_element_text"}`}
        >
          {questions[currentQuestion - 1].question}
        </p>
      );
    }
    return <p>There are no questions</p>;
  };

  const getAnswers = () => {
    const letterArray = ["A", "B", "C", "D"];
    if (questions.length > 0) {
      return questions[currentQuestion - 1].options.map((option, index) => (
        <li>
          <SelectionElement
            key={index}
            letter={letterArray[index]}
            label={option}
            activeSelection={activeSelection}
            setActiveSelection={setActiveSelection}
            displayResult={checkAnswer}
            isCorrect={option === correctAnswer}
            error={error}
            setError={setError}
            fontColor={isDark ? "dark_element_text" : "light_element_text"}
            bgColor={isDark ? "dark_element_bg" : "light_element_bg"}
          />
        </li>
      ));
    }
    return <p>There are no questions</p>;
  };

  const handleSubmission = () => {
    // check if user selected a choice
    if (!activeSelection) {
      setError("Please select an answer");
      return;
    }
    if (activeSelection === correctAnswer) {
      setAmountCorrect((prev: number) => prev + 1);
    }
    //setActiveSelection("");
    setCheckAnswer(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length) {
      setCurrentQuestion((prev: number) => prev + 1);
      setActiveSelection("");
      setCorrectAnswer("");
      setCheckAnswer(false);
      setError("");
    }
  };

  const handleResults = () => {
    setShowResults(true)
  }

  const renderButton = () => {
    if (!checkAnswer) {
      return (
        <CustomButton
          label={"Submit Answer"}
          handleSubmission={handleSubmission}
        />
      );
    } else {
      if (progress === 100) {
        return (
          <CustomButton
            label={"View Results"}
            handleSubmission={handleResults}
          />
        );
      } else {
        return (
          <CustomButton
            label={"Next Question"}
            handleSubmission={handleNextQuestion}
          />
        );
      }
    }
  };

  const renderQuiz = () => {
    return (
      <>
        <header>
          <div className={styles.number_question}>
            <p
              className={`${styles.number} ${isDark ? "dark_number_header_text" : "light_number_header_text"}`}
            >
              Question {currentQuestion} of {questions.length}
            </p>
            {renderQuestion()}
          </div>
          <div
            className={`${styles.progress_container} ${isDark ? "dark_element_bg" : "light_element_bg"}`}
          >
            <div
              className={styles.progress}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </header>
        <div className={styles.content}>
          <ul className={styles.options}>{getAnswers()}</ul>
          {renderButton()}
          {error && (
            <div className={styles.error_group}>
              <img
                src="../../../public/assets/images/icon-error.svg"
                alt="error icon"
              />
              <p
                className={`${styles.error_message} ${isDark ? "dark_error_text" : "light-error-text"}`}
              >
                {error}
              </p>
            </div>
          )}
        </div>
      </>
    );
  };

  const renderResults = () => {
    return (
      <div className={styles.results}>
        <header>
          <h2 className={`${styles.results_header_1} ${isDark? 'dark_element_text': 'light_element_text'}`}>Quiz completed</h2>
          <h2 className={`${styles.results_header_2} ${isDark? 'dark_element_text': 'light_element_text'}`}>You scored...</h2>
        </header>

        <section className={styles.score_container}>
          div.
        </section>
        <CustomButton
          label={"Try Again"}
          handleSubmission={() => setShowResults(false)}
        />
      </div>
    );
  }

  return (
      <div className={styles.container}>
        {showResults ? renderResults() : renderQuiz()}
      </div>
  );
};

export default QuizComponent;
