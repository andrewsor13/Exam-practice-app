import React from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import styles from "./GoBackButton.module.css";

export default function GoBackButton() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/`);
  };
  return (
    <button className={styles.button} onClick={handleClick}>
      <IoArrowBackCircleOutline />
    </button>
  );
}
