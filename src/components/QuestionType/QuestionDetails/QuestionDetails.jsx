import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../../../db/db.json";
import styles from "./QuestionDetails.module.css";
import { Notify } from "notiflix/build/notiflix-notify-aio";

export default function QuestionDetails() {
  const [checkedAnswers, setCheckedAnswers] = useState({});
  const [counter, setCounter] = useState(0);
  const { year, type } = useParams();
  const filteredYear = data.find((yearData) => yearData.year === year);
  const filteredType = filteredYear
    ? filteredYear.data.find((typeData) => typeData.type === type)
    : null;
  const questions = filteredType ? filteredType.data : [];

  const onChange = (questionId, answerIndex, isCorrect, checked) => {
    setCheckedAnswers((prevCheckedAnswers) => {
      const newCheckedAnswers = { ...prevCheckedAnswers };
      if (!newCheckedAnswers[questionId]) {
        newCheckedAnswers[questionId] = {};
      }
      newCheckedAnswers[questionId][answerIndex] = checked ? isCorrect : null;
      return newCheckedAnswers;
    });
  };

  useEffect(() => {
    let newCounter = 0;
    Object.values(checkedAnswers).forEach((answers) => {
      Object.values(answers).forEach((isCorrect) => {
        if (isCorrect === true) {
          newCounter++;
        } else if (isCorrect === false) {
          newCounter--;
        }
      });
    });
    setCounter(newCounter);
  }, [checkedAnswers]);

  useEffect(() => {
    console.log(counter);
    if (counter === 3) {
      Notify.success("Te descurci minunat!");
    } else if (counter === -3) {
      Notify.warning("Incearca sa te concentrezi!");
    }
  }, [counter]);

  return (
    <ol>
      {questions.map((question) => {
        const answers = question.answers;
        return (
          <li key={question.id}>
            <hr></hr>
            <h3 className={styles.question}>{question.question}</h3>
            <ol type="A" className={styles.answersList}>
              {answers.map((answer, key) => (
                <li key={key}>
                  <label className={styles.answersListItem}>
                    <input
                      type="checkbox"
                      onChange={(e) =>
                        onChange(
                          question.id,
                          key,
                          answer.isCorrect,
                          e.target.checked
                        )
                      }
                    />
                    <p
                      className={
                        checkedAnswers[question.id] &&
                        checkedAnswers[question.id][key] !== undefined
                          ? checkedAnswers[question.id][key] === true
                            ? styles.correct
                            : checkedAnswers[question.id][key] === false
                            ? `${styles.wrong} ${styles.shake}`
                            : ""
                          : ""
                      }
                    >
                      {answer.answer}
                    </p>
                  </label>
                </li>
              ))}
            </ol>
          </li>
        );
      })}
    </ol>
  );
}
