import React, { useState } from "react";
import QuizResult from "./QuizResult";
import Questions from "./Questions";
import { useLocation } from "react-router-dom";
import { note } from "../data";

const QuizScreen = ({ retry }) => {
  const location = useLocation();
  const quizId = parseInt(location.pathname.split("/")[2], 10);
  const selectedQuiz = note.find((n) => n.id === quizId);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [markedAnswers, setMarkedAnswers] = useState(
    new Array(selectedQuiz?.quiz?.length || 0).fill(null)
  );
  const isQuestionEnd = currentQuestionIndex === selectedQuiz?.quiz?.length;

  function calculateResult() {
    console.log(markedAnswers);
    let correct = 0;
    selectedQuiz?.quiz?.forEach((quizItem, index) => {
      if (quizItem.correctOptionIndex - 1 == markedAnswers[index]) {
        correct++;
      }
    });
    return {
      total: selectedQuiz?.quiz?.length,
      correct: correct,
      percentage: Math.trunc((correct / selectedQuiz?.quiz?.length) * 100),
    };
  }

  return (
    <div>
      {Array.isArray(selectedQuiz?.quiz) && selectedQuiz.quiz.length > 0 ? (
        isQuestionEnd ? (
          <QuizResult result={calculateResult()} retry={retry} />
        ) : (
          <Questions
            question={selectedQuiz?.quiz?.[currentQuestionIndex]}
            totalQuestion={selectedQuiz?.quiz?.length}
            currentQuestion={currentQuestionIndex + 1}
            setAnswer={(index) => {
              setMarkedAnswers((arr) => {
                let newArr = [...arr];
                newArr[currentQuestionIndex] = index;
                return newArr;
              });
              setCurrentQuestionIndex(currentQuestionIndex + 1);
            }}
          />
        )
      ) : (
        <p>Sorry, no question prepared yet.</p>
      )}
    </div>
  );
};

export default QuizScreen;
