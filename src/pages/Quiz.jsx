import React, { useState } from "react";
import QuizScreen from "../components/QuizScreen";
import JoinScreen from "../components/JoinScreen";

const Quiz = () => {
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  return (
    <div>
      {isQuizStarted ? (
        <QuizScreen retry={() => setIsQuizStarted(false)} />
      ) : (
        <JoinScreen start={() => setIsQuizStarted(true)} />
      )}
    </div>
  );
};

export default Quiz;
