import { useState } from "react";
import Image from "next/image";

import CCManDefault from "../../assets/frame1/gif/CCMan_Stand&speak.gif";
import CCManCorrect1 from "../../assets/frame1/gif/CCMan_Stand&speak.gif";
import CCManCorrect2 from "../../assets/frame1/gif/CCMan_Stand&speak.gif";
import CCManWrong1 from "../../assets/frame1/gif/CCMan_Stand&speak.gif";
import CCManWrong2 from "../../assets/frame1/gif/CCMan_Stand&speak.gif";

import GodDefault from "../../assets/frameQuiz/images/GOD.png";
import GodCorrect1 from "../../assets/frameQuiz/gif/GOD_Thumbs_up_GIF.gif";
import GodCorrect2 from "../../assets/frameQuiz/gif/GOD_Thumbs_up_GIF.gif";
import GodWrong1 from "../../assets/frameQuiz/gif/GOD_Angry_GIF.gif";
import GodWrong2 from "../../assets/frameQuiz/gif/GOD_Disappointed_GIF.gif";

const questions = [
  {
    questionText:
      "Which gas is the most significant greenhouse gas contributing to global warming?",
    answerOptions: [
      { answerText: "Carbon dioxide (CO2)", isCorrect: true },
      {
        answerText: "Oxygen (O2)",
        isCorrect: false,
        explanation: "Oxygen is not a greenhouse gas.",
      },
      {
        answerText: "Nitrogen (N2)",
        isCorrect: false,
        explanation:
          "Nitrogen is not a greenhouse gas; it makes up about 78% of the Earth's atmosphere and is relatively inert.",
      },
      {
        answerText: "Argon (Ar)",
        isCorrect: false,
        explanation:
          "Argon is a noble gas and does not contribute to the greenhouse effect.",
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
      },
      {
        answerText: "Natural variations in Earth’s climate",
        isCorrect: false,
        explanation:
          "While natural variations affect the climate, the rapid warming seen in recent decades is primarily due to human activities.",
      },
      {
        answerText: "Increased solar activity",
        isCorrect: false,
        explanation:
          "Solar activity has minor effects compared to the impact of greenhouse gases emitted by human activities.",
      },
      {
        answerText: "Decrease in volcanic activity",
        isCorrect: false,
        explanation:
          "Volcanic activity has cooling effects on the climate, but its reduction is not a significant factor in global warming.",
      },
    ],
  },
  {
    questionText:
      "Which action can significantly reduce your carbon footprint?",
    answerOptions: [
      { answerText: "Reducing air travel", isCorrect: true },
      {
        answerText: "Leaving electronics plugged in when not in use",
        isCorrect: false,
        explanation:
          "Leaving electronics plugged in increases energy consumption, thus increasing your carbon footprint.",
      },
      {
        answerText: "Using more heating in winter",
        isCorrect: false,
        explanation:
          "Using more heating increases energy consumption unless it is sourced from renewable energy.",
      },
      {
        answerText: "Driving larger, fuel-inefficient vehicles",
        isCorrect: false,
        explanation:
          "Driving larger, fuel-inefficient vehicles increases greenhouse gas emissions.",
      },
    ],
  },
  {
    questionText:
      "What is a significant consequence of global warming on oceans?",
    answerOptions: [
      { answerText: "Rising sea levels", isCorrect: true },
      {
        answerText: "Decrease in ocean temperatures",
        isCorrect: false,
        explanation:
          "Global warming causes an increase, not a decrease, in ocean temperatures.",
      },
      {
        answerText: "Decrease in sea ice but increase in land ice",
        isCorrect: false,
        explanation:
          "Global warming leads to the melting of both sea ice and land ice.",
      },
      {
        answerText: "Decrease in ocean salinity",
        isCorrect: false,
        explanation:
          "Global warming can lead to increased salinity in some areas due to evaporation and ice melt dilution in others; overall, it does not simply decrease ocean salinity.",
      },
    ],
  },
];

const FrameQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
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
    if (answerOption.isCorrect) {
      setCCManImg(getRandomImage([CCManCorrect1, CCManCorrect2]));
      setGodImg(getRandomImage([GodCorrect1, GodCorrect2]));
    } else {
      setCCManImg(getRandomImage([CCManWrong1, CCManWrong2]));
      setGodImg(getRandomImage([GodWrong1, GodWrong2]));
      setExplanation(answerOption.explanation);
    }
  };

  const nextQuestion = () => {
    const nextQuestionIndex = currentQuestion + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestion(nextQuestionIndex);
    } else {
      console.log("End of quiz");
    }
    setShowAnswers(false);
    setIsAnswerCorrect(null);
    setExplanation("");
    setCCManImg(CCManDefault);
    setGodImg(GodDefault);
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center py-10 md:py-20 space-y-4 md:space-x-4">
      <div className="flex flex-row justify-center items-center w-full md:w-auto">
        <div className="w-1/2 px-4">
          <Image src={CCManImg} alt="CCMan" />
        </div>
        <div className="w-1/2 px-4">
          <Image src={GodImg} alt="God" />
        </div>
      </div>
      <div className="w-full flex flex-col items-center px-4">
        <p className="text-sm md:text-xl xl:text-2xl font-semibold mb-4 text-center text-black">
          {questions[currentQuestion].questionText}
        </p>
        {!showAnswers &&
          questions[currentQuestion].answerOptions.map(
            (answerOption, index) => (
              <button
                key={index}
                className="w-full md:max-w-xs py-2 px-4 bg-neutral-100 text-black text-xs md:text-xl xl:text-2xl rounded hover:bg-green-400 transition duration-300"
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
            {!isAnswerCorrect && (
              <p className="text-amber-700 pb-4 text-sm md:text-lg">
                {explanation}
              </p>
            )}
            <button
              className="w-full md:max-w-xs py-2 px-4 bg-blue-500 text-white text-sm md:text-xl xl:text-2xl rounded hover:bg-blue-700 transition duration-300"
              onClick={nextQuestion}
            >
              Next Question
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default FrameQuiz;
