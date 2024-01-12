import React, { useEffect, useRef, useState } from "react";
import { TiTickOutline } from "react-icons/ti";
import { CgClose } from "react-icons/cg";

const Questions = ({ question, totalQuestion, currentQuestion, setAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [progressBarAnimated, setProgressBarAnimated] = useState(false);
  const timer = useRef(null);
  const progressBar = useRef(null);

  useEffect(() => {
    setProgressBarAnimated(false);

    // Start the timer for 10 seconds when the question changes
    timer.current = setTimeout(() => {
      // If the user didn't answer, show the correct answer and move to the next question after 2 seconds
      if (!answered) {
        setAnswered(true);
        setShowCorrectAnswer(true);

        setTimeout(() => {
          setShowCorrectAnswer(false);
          setAnswer(null);
          setSelectedOption(null);
          setAnswered(false);
        }, 2000);
      }
    }, 10000);

    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, [question, setAnswer, answered, selectedOption]);

  useEffect(() => {
    // Trigger progress bar animation when the component mounts or the question changes
    progressBar.current.classList.remove("animate-progress");
    setTimeout(() => {
      progressBar.current.classList.add("animate-progress");
      setProgressBarAnimated(true);
    }, 0);

    return () => {
      // Cleanup to remove the animation class when the component unmounts or the question changes
      if (progressBar.current) {
        progressBar.current.classList.remove("animate-progress");
      }
    };
  }, [question]);

  const handleOptionClick = (index) => {
    if (!answered) {
      // If the user answers, clear the timer, set the answer, and proceed to the next question after 2 seconds
      clearTimeout(timer.current);
      setSelectedOption(index);
      setAnswered(true);
      setProgressBarAnimated(true);
      setShowCorrectAnswer(true);

      setTimeout(() => {
        setAnswer(index);
        setSelectedOption(null);
        setProgressBarAnimated(false);
        setAnswered(false);
        setShowCorrectAnswer(false);
      }, 2000);
    }
  };

  const isOptionCorrect = (index) => {
    return answered && index === question.correctOptionIndex - 1;
  };

  const shouldHighlight = (index) => {
    const isCorrect = isOptionCorrect(index);
    return (
      (answered && index === selectedOption) ||
      (showCorrectAnswer &&
        (isCorrect || index === question.correctOptionIndex - 1))
    );
  };

  return (
    <div className="w-full h-full px-6 pb-0">
      <div className="flex flex-col justify-center items-center">
        <div className=" flex flex-col justify-between w-96 md:w-[650px] lg:w-[800px] xl:w-[1000px] h-[700px] xl:h-[650px] bg-white-100 border border-white-400 p-4 rounded-2xl">
          <div className="relative">
            <h3 className="text-2xl font-medium">Kuiz</h3>
            <div
              ref={progressBar}
              className={`absolute top-12 h-full ${
                progressBarAnimated ? "animate-progress" : ""
              }`}
            ></div>
            <hr className="w-full border-white-400 mt-4" />
          </div>
          <div>
            <h5 className=" mb-6 xl:text-xl">{question.question}</h5>

            <div className="">
              {question.options.map((option, index) => (
                <div
                  className={`xl:text-xl mb-2 md:mb-6 rounded-lg px-2 xl:px-4 py-2 xl:py-4 border border-white-400 cursor-pointer ${
                    shouldHighlight(index)
                      ? isOptionCorrect(index)
                        ? "bg-green-100"
                        : "bg-red-100"
                      : "bg-white-200"
                  }`}
                  key={index}
                  onClick={() => handleOptionClick(index)}
                >
                  {shouldHighlight(index) ? (
                    <div className="flex flex-row items-center gap-2">
                      <p className>{option}</p>
                      <span>
                        {isOptionCorrect(index) ? (
                          <TiTickOutline className="text-3xl text-green-500 border border-green-500 rounded-full " />
                        ) : (
                          <CgClose className="text-3xl text-red-500 border border-red-500 rounded-full p-1" />
                        )}
                      </span>
                    </div>
                  ) : (
                    option
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <hr className="w-full border-white-400" />
            <div className="flex justify-between items-center">
              <div className="xl:text-xl">
                <b>{currentQuestion}</b> dari <b>{totalQuestion}</b> soalan
              </div>
              <div>
                {/* <button
                  className="bg-slate-900 text-white-200 xl:text-xl rounded-lg px-10 py-2"
                  onClick={goToNextQuestion}
                >
                  Next
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
