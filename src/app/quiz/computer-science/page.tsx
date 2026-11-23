
"use client";

import { useState } from "react";
import Link from "next/link";

const questions = [
  {
    question: "What does CPU stand for?",
    options: [
      "Central Processing Unit",
      "Computer Personal Unit",
      "Central Program Utility",
      "Control Processing User",
    ],
    correctAnswer: 0,
    explanation:
      "CPU stands for Central Processing Unit. It executes instructions and performs calculations that help a computer operate.",
  },
  {
    question: "Which programming language is primarily used for web page structure?",
    options: ["Python", "HTML", "C++", "Java"],
    correctAnswer: 1,
    explanation:
      "HTML (HyperText Markup Language) provides the structure and content of web pages.",
  },
  {
    question: "What is the main purpose of RAM?",
    options: [
      "To store files permanently",
      "To connect to the internet",
      "To temporarily store data being used by the computer",
      "To protect the computer from viruses",
    ],
    correctAnswer: 2,
    explanation:
      "RAM is temporary memory that stores data and instructions currently being used by the computer.",
  },
  {
    question: "Which of the following is an example of an operating system?",
    options: ["Google Chrome", "Microsoft Word", "Windows", "Adobe Photoshop"],
    correctAnswer: 2,
    explanation:
      "Windows is an operating system that manages computer hardware, software, and system resources.",
  },
  {
    question: "What does AI stand for?",
    options: [
      "Automated Internet",
      "Artificial Intelligence",
      "Advanced Integration",
      "Applied Information",
    ],
    correctAnswer: 1,
    explanation:
      "AI stands for Artificial Intelligence. It refers to computer systems designed to perform tasks that typically require human intelligence.",
  },
];

export default function ComputerScienceQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const question = questions[currentQuestion];
  const isCorrect = selectedAnswer === question.correctAnswer;
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  function handleNext() {
    if (selectedAnswer === null) return;

    const updatedScore = score + (isCorrect ? 1 : 0);
    setScore(updatedScore);

    if (currentQuestion === questions.length - 1) {
      setShowResults(true);
    } else {
      setCurrentQuestion((previous) => previous + 1);
      setSelectedAnswer(null);
    }
  }

  function handleRestart() {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResults(false);
  }

  if (showResults) {
    const percentage = Math.round((score / questions.length) * 100);

    return (
      <main className="quiz-page">
        <div className="quiz-container result-container">
          <Link href="/" className="quiz-brand">
            Inquoria<span>.</span>
          </Link>

          <div className="result-icon">
            {percentage >= 80 ? "🏆" : percentage >= 60 ? "⭐" : "📚"}
          </div>

          <span className="quiz-kicker">QUIZ COMPLETED</span>

          <h1>Your learning journey continues!</h1>

          <p className="result-message">
            {percentage >= 80
              ? "Excellent work! You've demonstrated strong knowledge."
              : percentage >= 60
                ? "Good effort! Keep practising to improve your knowledge."
                : "Every attempt is a learning opportunity. Try again and improve your score!"}
          </p>

          <div className="score-circle">
            <strong>{percentage}%</strong>
            <span>Your score</span>
          </div>

          <div className="result-stats">
            <div>
              <strong>{score}</strong>
              <span>Correct answers</span>
            </div>
            <div>
              <strong>{questions.length - score}</strong>
              <span>Incorrect answers</span>
            </div>
            <div>
              <strong>{questions.length}</strong>
              <span>Total questions</span>
            </div>
          </div>

          <button className="quiz-primary-button" onClick={handleRestart}>
            Try again ↻
          </button>

          <Link href="/" className="back-home-link">
            ← Back to homepage
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="quiz-page">
      <div className="quiz-container">
        <header className="quiz-header">
          <Link href="/" className="quiz-brand">
            Inquoria<span>.</span>
          </Link>

          <span className="quiz-label">LEARNING EXPERIENCE</span>
        </header>

        <div className="quiz-intro">
          <span className="quiz-kicker">TEST YOUR KNOWLEDGE</span>
          <h1>Computer Science</h1>
          <p>Challenge yourself and discover how much you know.</p>
        </div>

        <div className="quiz-progress-info">
          <span>
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <span>{Math.round(progress)}% completed</span>
        </div>

        <div className="quiz-progress-track">
          <div
            className="quiz-progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>

        <section className="question-card">
          <span className="question-number">
            QUESTION {String(currentQuestion + 1).padStart(2, "0")}
          </span>

          <h2>{question.question}</h2>

          <p className="answer-instruction">
            Select the correct answer below.
          </p>

          <div className="answer-options">
            {question.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isAnswerCorrect = index === question.correctAnswer;

              let optionClass = "answer-option";

              if (selectedAnswer !== null && isAnswerCorrect) {
                optionClass += " answer-correct";
              } else if (isSelected && !isCorrect) {
                optionClass += " answer-incorrect";
              } else if (isSelected) {
                optionClass += " answer-selected";
              }

              return (
                <button
                  key={option}
                  className={optionClass}
                  onClick={() => setSelectedAnswer(index)}
                  disabled={selectedAnswer !== null}
                >
                  <span className="option-letter">
                    {String.fromCharCode(65 + index)}
                  </span>

                  <span>{option}</span>

                  {selectedAnswer !== null && isAnswerCorrect && (
                    <span className="option-status">✓</span>
                  )}

                  {isSelected && !isCorrect && (
                    <span className="option-status">✕</span>
                  )}
                </button>
              );
            })}
          </div>

          {selectedAnswer !== null && (
            <div
              className={`answer-feedback ${
                isCorrect ? "feedback-correct" : "feedback-incorrect"
              }`}
            >
              <strong>
                {isCorrect ? "Correct answer! 🎉" : "Not quite! Keep learning."}
              </strong>
              <p>{question.explanation}</p>
            </div>
          )}

          <div className="quiz-footer">
            <span className="quiz-score">
              Your score: {score}/{questions.length}
            </span>

            <button
              className="quiz-primary-button"
              onClick={handleNext}
              disabled={selectedAnswer === null}
            >
              {currentQuestion === questions.length - 1
                ? "See results"
                : "Next question →"}
            </button>
          </div>
        </section>

        <p className="quiz-bottom-note">
          <span>✦</span> Learn. Explore. Evolve.
        </p>
      </div>
    </main>
  );
}
