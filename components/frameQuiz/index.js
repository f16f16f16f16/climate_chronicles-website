import { useState } from "react";
import Image from "next/image";

import CCManDefault from "../../assets/frame1/gif/CCMan_Stand&speak.webp";
import CCManCorrect1 from "../../assets/frameQuiz/gif/CCMan_Dap.webp";
import CCManCorrect2 from "../../assets/frameQuiz/gif/CCMan_Happy.webp";
import CCManWrong1 from "../../assets/frameQuiz/gif/CCMan_Crying.webp";
import CCManWrong2 from "../../assets/frameQuiz/gif/CCMan_Crying.webp";
import CCManHighScore from "../../assets/frameQuiz/gif/CCMan_Dap.webp";
import CCManMediumScore from "../../assets/frameQuiz/gif/CCMan_Happy.webp";
import CCManLowScore from "../../assets/frameQuiz/gif/CCMan_Crying.webp";

import GodDefault from "../../assets/frameQuiz/gif/God_Speaking.webp";
import GodCorrect1 from "../../assets/frameQuiz/gif/GOD_Thumbs_up.webp";
import GodCorrect2 from "../../assets/frameQuiz/gif/God_Dancing.webp";
import GodWrong1 from "../../assets/frameQuiz/gif/GOD_Angry.webp";
import GodWrong2 from "../../assets/frameQuiz/gif/GOD_Disappointed.webp";
import GodHighScore from "../../assets/frameQuiz/gif/God_Dancing.webp";
import GodMediumScore from "../../assets/frameQuiz/gif/GOD_Thumbs_up.webp";
import GodLowScore from "../../assets/frameQuiz/gif/GOD_Angry.webp";

import questions from "../quiz/question";

const FrameQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [explanation, setExplanation] = useState("");
  const [CCManImg, setCCManImg] = useState(CCManDefault);
  const [GodImg, setGodImg] = useState(GodDefault);

  const getRandomImage = (imageSet) => {
    const randomIndex = Math.floor(Math.random() * imageSet.length);
    return imageSet[randomIndex];
  };

  const handleAnswerOptionClick = (answerOption) => {
    setIsAnswerCorrect(answerOption.isCorrect);
    setShowAnswers(true);
    setExplanation(answerOption.explanation);
    if (answerOption.isCorrect) {
      setCorrectAnswersCount(correctAnswersCount + 1);
      setCCManImg(getRandomImage([CCManCorrect1, CCManCorrect2]));
      setGodImg(getRandomImage([GodCorrect1, GodCorrect2]));
    } else {
      setCCManImg(getRandomImage([CCManWrong1, CCManWrong2]));
      setGodImg(getRandomImage([GodWrong1, GodWrong2]));
    }
  };

  const nextQuestion = () => {
    const nextQuestionIndex = currentQuestion + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestion(nextQuestionIndex);
      setShowAnswers(false);
      setIsAnswerCorrect(null);
      setCCManImg(CCManDefault);
      setGodImg(GodDefault);
    } else {
      // Quiz ends, calculate score and decide which image to show
      const percentage = (correctAnswersCount / questions.length) * 100;
      let newCCManImg, newGodImg;
      if (percentage >= 80) {
        newCCManImg = CCManHighScore;
        newGodImg = GodHighScore;
      } else if (percentage >= 50) {
        newCCManImg = CCManMediumScore;
        newGodImg = GodMediumScore;
      } else {
        newCCManImg = CCManLowScore;
        newGodImg = GodLowScore;
      }
      setCCManImg(newCCManImg);
      setGodImg(newGodImg);

      const feedback = getFeedbackMessage(
        correctAnswersCount,
        questions.length
      );
      setExplanation(
        `You scored ${correctAnswersCount} out of ${questions.length}. ${feedback}`
      );
      setCurrentQuestion(-1);
    }
  };

  const getFeedbackMessage = (score, total) => {
    const percentage = (score / total) * 100;
    if (percentage >= 80) {
      return "Excellent work! You're doing great.";
    } else if (percentage >= 50) {
      return "Nice effort! But there's room for improvement.";
    } else {
      return "You need to improve. Keep learning and trying!";
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setShowAnswers(false);
    setIsAnswerCorrect(null);
    setExplanation("");
    setCorrectAnswersCount(0);
    setCCManImg(CCManDefault);
    setGodImg(GodDefault);
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center py-8 md:py-20 space-y-4 md:space-x-4">
      <div className="hidden md:block w-full md:w-1/4 flex justify-center">
        <Image src={GodImg} alt="God" />
      </div>
      <div className="w-full md:w-1/2 flex flex-col items-center px-4">
        {currentQuestion !== -1 ? (
          <>
            <div className="bg-[#EEF1F5] rounded-lg drop-shadow-lg p-4 mb-6">
              <p className="text-2xl md:text-3xl xl:text-4xl font-semibold text-center text-black">
                Question {currentQuestion + 1}
              </p>
            </div>
            <div className="bg-[#EEF1F5] rounded-lg drop-shadow-lg p-4 mb-6 md:mb-10 xl:mb-12 ">
              <p className="text-xl md:text-2xl xl:text-3xl font-semibold text-center text-black">
                {questions[currentQuestion].questionText}
              </p>
            </div>
            {!showAnswers &&
              questions[currentQuestion].answerOptions.map(
                (answerOption, index) => (
                  <button
                    key={index}
                    className="w-3/4 md:w-full xl:w-3/4 py-2 px-4 mb-6 bg-[#EEF1F5] text-black text-sm md:text-xl xl:text-2xl rounded-lg drop-shadow-xl hover:bg-slate-200 transition duration-300"
                    onClick={() => handleAnswerOptionClick(answerOption)}
                  >
                    {answerOption.answerText}
                  </button>
                )
              )}
            {showAnswers && (
              <>
                <p
                  className={`${
                    isAnswerCorrect ? "text-green-500" : "text-red-500"
                  } py-4 text-md md:text-2xl xl:text-3xl text-center`}
                >
                  {isAnswerCorrect ? "Correct!" : "Wrong!"}
                </p>
                <p className="text-amber-700 pb-4 text-md md:text-xl xl:text-2xl">
                  {explanation}
                </p>
                <button
                  className="w-full md:max-w-xs py-2 px-4 bg-blue-500 text-white text-sm md:text-xl xl:text-2xl rounded hover:bg-blue-700 transition duration-300"
                  onClick={nextQuestion}
                >
                  {currentQuestion === questions.length - 1
                    ? "Show Scores"
                    : "Next Question"}
                </button>
              </>
            )}
          </>
        ) : (
          <div className="w-full px-4 py-10 text-center">
            <p className="text-xl md:text-3xl xl:text-4xl font-bold mb-3 text-blue-600">
              Quiz Complete!
            </p>
            <p className="text-md md:text-xl xl:text-2xl font-semibold text-black">
              {explanation}
            </p>
            <button
              className="mt-4 px-6 py-2 bg-green-500 text-white rounded hover:bg-green-700 transition duration-300"
              onClick={resetQuiz}
            >
              Restart Quiz
            </button>
          </div>
        )}
      </div>
      <div className="hidden md:block w-full md:w-1/4 flex justify-center">
        <Image src={CCManImg} alt="CCMan" />
      </div>
      <div className="block md:hidden w-2/4 flex justify-center mt-4">
        <Image src={GodImg} alt="God" />
      </div>
    </div>
  );
};

export default FrameQuiz;
