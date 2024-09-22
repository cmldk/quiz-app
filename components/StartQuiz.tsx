import { useState } from 'react';
import { Quiz } from './Quiz/Quiz';
import { Post } from '@/types/post';
import {
  QUESTION_DURATION_IN_SECONDS,
  NOT_CLICKABLE_DURATION_IN_SECONDS,
} from './Quiz/Question';

interface StartQuizProps {
  questions: Post[];
}

export const StartQuiz = ({ questions }: StartQuizProps) => {
  const [hasStarted, setHasStarted] = useState(false);

  const handleStartQuiz = () => {
    setHasStarted(true);
  };

  if (hasStarted) {
    return <Quiz questions={questions} />;
  }

  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-2xl font-bold mb-4">Sınava Hoşgeldiniz!</h1>
      <ul className="list-disc text-left mb-6">
        <li>Toplam {questions.length} soru olacaktır.</li>
        <li>
          Her soru için {QUESTION_DURATION_IN_SECONDS} saniye süreniz olacaktır.
        </li>
        <li>
          İlk {NOT_CLICKABLE_DURATION_IN_SECONDS} saniye boyunca soruyu
          cevaplayamazsınız.
        </li>
        <li>Sınav bitiminde cevaplarınızı görebilirsiniz.</li>
      </ul>
      <button
        className="bg-blue-500 px-4 py-2 rounded"
        onClick={handleStartQuiz}
      >
        Başla
      </button>
    </div>
  );
};
