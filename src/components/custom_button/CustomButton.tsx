
import styles from "./CustomButton.module.css";

interface CustomButtonProps {
  label: string;
  handleSubmission?: () => void;
}

const CustomButton = ({ label, handleSubmission }: CustomButtonProps) => {



  return (
    <>
      <button
        className={`${styles.button}`}
        onClick={handleSubmission}
      >
        {label}
      </button>
    </>
  );
};

export default CustomButton;
