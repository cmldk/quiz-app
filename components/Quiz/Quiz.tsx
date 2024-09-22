import { useState } from 'react';
import { Post } from '@/types/post';
import { QuizSummary } from './QuizSummary';
import { Question } from './Question';
import { TOTAL_QUESTIONS } from '@/lib/fetch-posts';

interface QuizProps {
  questions: Post[];
}

export const Quiz = ({ questions }: QuizProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<(string | null)[]>(
    Array(TOTAL_QUESTIONS).fill(null)
  );

  const currentQuestion = questions[currentQuestionIndex];
  const questionNumber = currentQuestionIndex + 1;

  function handleAnswer(answer: string | null) {
    if (answer) {
      setAnswers((prevAnswers) => {
        const updatedAnswers = [...prevAnswers];
        updatedAnswers[currentQuestionIndex] = answer;
        return updatedAnswers;
      });
    }

    // go to next question
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  }

  return currentQuestionIndex < questions.length ? (
    <Question
      question={currentQuestion}
      questionNumber={questionNumber}
      onAnswer={handleAnswer}
    />
  ) : (
    <QuizSummary answers={answers} />
  );
};
