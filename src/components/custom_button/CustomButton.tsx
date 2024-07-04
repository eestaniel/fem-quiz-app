import styles from "./CustomButton.module.css";

interface CustomButtonProps {
  label: string;
  handleSubmission?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  handleSubmission,
}) => {
  return (
    <button className={styles.button} onClick={handleSubmission}>
      {label}
    </button>
  );
};

export default CustomButton;
