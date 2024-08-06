import React from "react";
import questionsData from "../../db/db.json";
import styles from "./Menu.module.css";
import { useNavigate } from "react-router-dom";

export default function Menu() {
  const navigate = useNavigate();

  const handleClick = (year) => {
    navigate(`/${year}`);
  };

  return (
    <div className={styles.buttonsContainer}>
      {questionsData?.map((yearData, key) => {
        return (
          <button
            className={styles.button}
            key={key}
            onClick={() => handleClick(yearData.year)}
          >
            {yearData.year}
          </button>
        );
      })}
    </div>
  );
}
