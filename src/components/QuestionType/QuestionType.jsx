import React from "react";
import questionsData from "../../db/db.json";
import { Outlet, useParams } from "react-router-dom";
import styles from "./QuestionType.module.css";
import { NavLink } from "react-router-dom";
import GoBackButton from "../GoBackButton/GoBackButton";

export default function QuestionType() {
  const { year } = useParams();
  const filteredYearData = questionsData.find(
    (yearData) => yearData.year === year
  );
  const questionsType = filteredYearData ? filteredYearData.data : [];

  return (
    <div>
      <GoBackButton />
      <ul className={styles.typeList}>
        {questionsType?.map((questionType, key) => {
          return (
            <li key={key}>
              <NavLink
                to={`${questionType.type}`}
                className={({ isActive }) => (isActive ? styles.active : "")}
              >
                <button className={styles.button}>
                  <p className={styles.linkText}>{questionType.type}</p>
                </button>
              </NavLink>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </div>
  );
}
