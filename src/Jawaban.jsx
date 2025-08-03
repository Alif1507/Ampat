import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { questions } from '../constants';

const Jawaban = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const userAnswers = state?.userAnswers || [];

  const score = userAnswers.reduce((acc, answer, i) => {
    return acc + (parseInt(answer) === parseInt(questions[i].answer) ? 1 : 0);
  }, 0);

  return (
    <div className="min-h-screen bg-[#F5F5DC] pt-6 pb-24 px-4 sm:px-8 relative font-inter">
      {/* Header Hasil */}
      <div className="max-w-3xl mx-auto bg-[#ffffff8f] rounded-t-xl rounded-b-md shadow-md  p-6  relative mb-8">
         <div className="absolute top-0 left-0 w-full h-[25px] bg-gradient-to-r from-[#05668D] via-[#058FC6] to-[#05B7FF]  rounded-t-xl" />
         <div className='mt-5'>
            <div className="absolute top-11 left-4">
            <img src="/gambar/logojawaban.png" alt="logo" className="w-15 h-15 object-contain" />
            </div>
            <div className='justify-center text-center'>
                <h1 className="text-2xl font-bold text-[#03374C]">Hasil Jawaban</h1>
                <div className="text-xl font-semibold text-[#03374C] py-2">{score}/10</div>
            </div>
         </div>

      

      <div className="max-w-3xl mx-auto">
        {questions.map((q, idx) => {
          const userAnswerIndex = userAnswers[idx];
          const correctAnswerIndex = parseInt(q.answer);
          const isCorrect = userAnswerIndex === correctAnswerIndex;

          return (
            <div
              key={idx}
              className={`bg-white mt-5 border-l-4 ${
                isCorrect ? 'border-green-400' : 'border-red-400'
              } rounded-lg p-5 mb-5 shadow-md`}
            >
              <div className="text-sm text-gray-500 mb-1">{idx + 1}/10</div>
              <h2 className="text-lg font-semibold text-[#03374C] mb-3">{q.question}</h2>

              <div className="text-sm space-y-1">
                <div>
                  <span className="font-semibold text-green-700">Jawaban benar:</span>{' '}
                  <span>
                    {String.fromCharCode(65 + correctAnswerIndex)}. {q.options[correctAnswerIndex]}
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-blue-700">Jawaban kamu:</span>{' '}
                  <span>
                    {userAnswerIndex !== undefined
                      ? `${String.fromCharCode(65 + userAnswerIndex)}. ${q.options[userAnswerIndex]}`
                      : 'Belum dijawab'}
                  </span>
                </div>
                <div className={`font-bold mt-1 ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                  {isCorrect ? '✔ Benar' : '✘ Salah'}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <button
          onClick={() => navigate('/')}
          className="bg-[#68D4FF] hover:bg-sky-500 text-black text-lg font-semibold px-8 py-3 rounded-xl shadow-lg transition-all cursor-pointer"
        >
          Back Home
        </button>
      </div>
    </div>
    </div>
  );
};

export default Jawaban;
