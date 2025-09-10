import React, { useState } from "react";

const QUESTIONS = [
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "CSS", "JavaScript", "Python"],
    answer: "CSS",
  },
  {
    question: "Which React hook is used for state management?",
    options: ["useState", "useEffect", "useContext", "useRef"],
    answer: "useState",
  },
  {
    question: "Which company created React?",
    options: ["Google", "Facebook (Meta)", "Microsoft", "Netflix"],
    answer: "Facebook (Meta)",
  },
  {
    question: "What does JSX stand for?",
    options: [
      "Java Syntax Extension",
      "JavaScript XML",
      "JSON XML",
      "Java Source Xpress",
    ],
    answer: "JavaScript XML",
  },
];

export default function App() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selected, setSelected] = useState(null);

  const current = QUESTIONS[index];

  const handleAnswer = (option) => {
    setSelected(option);
  };

  const nextQuestion = () => {
    if (selected === current.answer) setScore((s) => s + 1);
    setSelected(null);

    if (index + 1 < QUESTIONS.length) {
      setIndex((i) => i + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setIndex(0);
    setScore(0);
    setSelected(null);
    setShowResult(false);
  };

  if (showResult) {
    return (
      <div className="app">
        <h1>Quiz Result</h1>
        <p>
          Your score: <strong>{score}</strong> / {QUESTIONS.length}
        </p>
        <button onClick={restartQuiz}>Restart Quiz</button>
      </div>
    );
  }

  return (
    <div className="app">
      <h1>React Quiz</h1>

      <div className="question-card">
        <p className="q-text">
          {index + 1}. {current.question}
        </p>

        <div className="options">
          {current.options.map((option) => (
            <button
              key={option}
              className={`option ${selected === option ? "selected" : ""}`}
              onClick={() => handleAnswer(option)}
            >
              {option}
            </button>
          ))}
        </div>

        <div className="controls">
          <button
            onClick={nextQuestion}
            disabled={!selected}
            className="next-btn"
          >
            {index === QUESTIONS.length - 1 ? "Finish" : "Next"}
          </button>
        </div>

        <p className="progress">
          Question {index + 1} of {QUESTIONS.length}
        </p>
      </div>
    </div>
  );
}
