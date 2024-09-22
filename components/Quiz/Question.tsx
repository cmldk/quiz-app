import { useTimer } from '@/hooks/use-timer';
import { TOTAL_QUESTIONS } from '@/lib/fetch-posts';
import { Post } from '@/types/post';
import { useState } from 'react';

interface QuestionProps {
  question: Post;
  onAnswer: (answer: string | null) => void;
  questionNumber: number;
}

export const QUESTION_DURATION_IN_SECONDS = 30;
export const NOT_CLICKABLE_DURATION_IN_SECONDS = 10;

export const Question = ({
  question,
  onAnswer,
  questionNumber,
}: QuestionProps) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const _question = question.title;
  const bodyWords = question.body.split(' ');
  const options = ['A', 'B', 'C', 'D'].map((choice, index) => ({
    choice,
    text: bodyWords.slice(index, index + 2).join(' '),
  }));

  const _onAnswer = () => {
    onAnswer(selectedOption);
    setSelectedOption(null);
    resetTimer();
  };

  const { timeLeft, isClickable, resetTimer } = useTimer({
    duration: QUESTION_DURATION_IN_SECONDS,
    notClickableDuration: NOT_CLICKABLE_DURATION_IN_SECONDS,
    onTimeUp: _onAnswer,
  });

  return (
    <>
      <div className="flex items-center justify-between border-b-[1px] mb-3">
        <p>{`Soru - ${questionNumber} / ${TOTAL_QUESTIONS}`}</p>
        <p>{timeLeft} saniye</p>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          _onAnswer();
        }}
      >
        <h2 className="text-xl">{`${questionNumber}. ${_question}`}</h2>
        <div className="flex flex-col mt-5">
          {options.map((option, index) => (
            <label
              key={`q-${question.id}-${index}`}
              className="mb-4 cursor-pointer"
            >
              <input
                type="radio"
                name="question"
                value={option.choice}
                onChange={() => setSelectedOption(option.choice)}
                disabled={!isClickable}
                className="mr-2"
              />
              {`${option.choice}) ${option.text}`}
            </label>
          ))}
        </div>
        <button
          type="submit"
          className="px-4 py-2 w-full bg-blue-500 rounded disabled:bg-gray-700"
          disabled={!selectedOption || !isClickable}
        >
          Cevapla
        </button>
      </form>
    </>
  );
};
