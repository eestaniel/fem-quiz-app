import html_icon from "../../public/assets/images/icon-html.svg";
import css_icon from "../../public/assets/images/icon-css.svg";
import js_icon from "../../public/assets/images/icon-js.svg";
import accessibility_icon from "../../public/assets/images/icon-accessibility.svg";
import styles from "./QuizIconCategory.module.css";

interface QuizIconCategoryProps {
  quizType: string;
  isDark: boolean;
}

const QuizIconCategory = ({ isDark, quizType }: QuizIconCategoryProps) => {
  const getIcon = (type: string) => {
    switch (type) {
      case "HTML":
        return { icon: html_icon, label: "HTML" };
      case "CSS":
        return { icon: css_icon, label: "CSS" };
      case "JavaScript":
        return { icon: js_icon, label: "JavaScript" };
      case "Accessibility":
        return { icon: accessibility_icon, label: "Accessibility" };
      default:
        return { icon: "", label: "" };
    }
  };

  const { icon, label } = getIcon(quizType);

  return (
      <div className={styles.container}>
        <div
            className={`${styles.img_container} 
            ${styles[quizType.toLowerCase()]}
            
            `}
        >
          {icon && <img src={icon} alt={`${quizType} icon`} />}
        </div>
        <h4 className={isDark ? "dark_element_text" : "light_element_text"}>
          {label}
        </h4>
      </div>

  );
};

export default QuizIconCategory;
