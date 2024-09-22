interface QuizSummaryProps {
  answers: (string | null)[];
}

export const QuizSummary = ({ answers }: QuizSummaryProps) => (
  <div className="text-center">
    <h2 className="text-xl mb-5">Sınav Tamamlandı!</h2>
    <table className="min-w-full table-auto border-collapse border border-gray-300">
      <thead>
        <tr>
          <th className="border border-gray-300 px-4 py-2">Soru No</th>
          <th className="border border-gray-300 px-4 py-2">Cevap</th>
        </tr>
      </thead>
      <tbody>
        {answers.map((answer, index) => (
          <tr key={index}>
            <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
            <td className="border border-gray-300 px-4 py-2">
              {answer || 'Yanıtlanmadı'}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
