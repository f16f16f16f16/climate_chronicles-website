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

const questions = [
  {
    questionText:
      "Which gas is the most significant greenhouse gas contributing to global warming?",
    answerOptions: [
      {
        answerText: "Carbon dioxide (CO2)",
        isCorrect: true,
        explanation:
          "CO2, primarily released through human activities like burning fossil fuels, is the main driver of global warming.",
      },
      {
        answerText: "Oxygen (O2)",
        isCorrect: false,
        explanation: "Oxygen is not a greenhouse gas.",
      },
      {
        answerText: "Nitrogen (N2)",
        isCorrect: false,
        explanation:
          "Nitrogen, making up about 78% of the Earth's air, is inert and not a greenhouse gas.",
      },
      {
        answerText: "Argon (Ar)",
        isCorrect: false,
        explanation:
          "Argon is inert and does not contribute to the greenhouse effect.",
      },
    ],
  },
  {
    questionText:
      "What is the primary cause of recent global temperature increases?",
    answerOptions: [
      {
        answerText:
          "Human activity, especially fossil fuel burning and deforestation",
        isCorrect: true,
        explanation:
          "Recent global warming is mainly caused by human activities such as burning fossil fuels and deforestation.",
      },
      {
        answerText: "Natural variations in Earth’s climate",
        isCorrect: false,
        explanation:
          "Natural variations are overshadowed by the effects of human activities.",
      },
      {
        answerText: "Increased solar activity",
        isCorrect: false,
        explanation:
          "The impact of solar activity is minor compared to greenhouse gases from human activities.",
      },
      {
        answerText: "Decrease in volcanic activity",
        isCorrect: false,
        explanation:
          "Decreased volcanic activity has a negligible effect on recent global warming.",
      },
    ],
  },
  {
    questionText:
      "Which action can significantly reduce your carbon footprint?",
    answerOptions: [
      {
        answerText: "Reducing air travel",
        isCorrect: true,
        explanation: "Air travel is a major source of carbon emissions.",
      },
      {
        answerText: "Leaving electronics plugged in when not in use",
        isCorrect: false,
        explanation:
          "This habit increases energy use and your carbon footprint.",
      },
      {
        answerText: "Using more heating in winter",
        isCorrect: false,
        explanation:
          "More heating boosts energy consumption and carbon emissions.",
      },
      {
        answerText: "Driving larger, fuel-inefficient vehicles",
        isCorrect: false,
        explanation: "Larger vehicles emit more greenhouse gases.",
      },
    ],
  },
  {
    questionText:
      "What is a significant consequence of global warming on oceans?",
    answerOptions: [
      {
        answerText: "Rising sea levels",
        isCorrect: true,
        explanation: "Warming oceans expand and contribute to sea level rise.",
      },
      {
        answerText: "Decrease in ocean temperatures",
        isCorrect: false,
        explanation: "Ocean temperatures rise due to global warming.",
      },
      {
        answerText: "Decrease in sea ice but increase in land ice",
        isCorrect: false,
        explanation: "Both sea and land ice are melting due to global warming.",
      },
      {
        answerText: "Decrease in ocean salinity",
        isCorrect: false,
        explanation:
          "Global warming affects salinity unevenly; it doesn't simply decrease it.",
      },
    ],
  },
];

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
    <div className="flex flex-col md:flex-row justify-center items-center py-10 md:py-20 space-y-4 md:space-x-4">
      <div className="flex flex-row justify-center items-center w-full md:w-auto">
        <div className="w-1/2 ml-12">
          <Image src={CCManImg} alt="CCMan" />
        </div>
        <div className="w-[70%] px-4">
          <Image src={GodImg} alt="God" />
        </div>
      </div>
      {currentQuestion !== -1 ? (
        <div className="w-full flex flex-col items-center px-4">
          <p className="text-xl md:text-2xl xl:text-3xl font-semibold mb-6 md:mb-10 xl:mb-12 text-center text-black">
            {questions[currentQuestion].questionText}
          </p>
          {!showAnswers &&
            questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <button
                  key={index}
                  className="w-full md:max-w-xs py-2 px-4 bg-neutral-100 text-black text-xs md:text-xl xl:text-2xl rounded hover:bg-slate-200 transition duration-300"
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
                } py-4 text-sm md:text-xl xl:text-2xl`}
              >
                {isAnswerCorrect ? "Correct!" : "Wrong!"}
              </p>
              <p className="text-amber-700 pb-4 text-sm md:text-lg">
                {explanation}
              </p>
              <button
                className="w-full md:max-w-xs py-2 px-4 bg-blue-500 text-white text-sm md:text-xl xl:text-2xl rounded hover:bg-blue-700 transition duration-300"
                onClick={nextQuestion}
              >
                {currentQuestion === questions.length - 1 ? "Show Scores" : "Next Question"}
              </button>
            </>
          )}
        </div>
      ) : (
        <div className="w-full md:w-3/4 px-4 py-10 text-center">
          <p className="text-lg md:text-2xl xl:text-3xl font-bold mb-3 text-blue-600">
            Quiz Complete!
          </p>
          <p className="text-md md:text-xl font-semibold text-black">
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
  );
};

export default FrameQuiz;
