import React from "react";
import styles from './CustomButton.module.css';

interface CustomButtonProps {
    label: string;
}

const CustomButton:React.FC<CustomButtonProps> = ({label}) => {
    return (
        <>
            <button className={`${styles.button} heading-s`}>{label}</button>
        </>
    );
};

export default CustomButton;
