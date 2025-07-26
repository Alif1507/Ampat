import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { questions } from '../constants';
import "@fontsource/schoolbell";
import { motion, AnimatePresence } from "framer-motion";

const QuizPage = () => {

 

  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showTransition, setShowTransition] = useState(false); 
  const [isFinished, setIsFinished] = useState(false);
  const [introStep, setIntroStep] = useState(0);


  const handleAnswer = (index) => {
  setSelected(index);

  const isLastQuestion = current + 1 === questions.length;

  if (index.toString() === questions[current].answer) {
    setScore((prev) => prev + 1);
  }

  if (isLastQuestion) {
    setSelected(null);
    setIsFinished(true);
  } else {
    setShowTransition(true);
    setTimeout(() => {
      setSelected(null);
      setShowTransition(false);
      setCurrent((prev) => prev + 1);
    }, 1500);
  }
};

  const currentQuestion = questions[current];


  
  const navigate = useNavigate();
  const handleExit = () => {
    navigate("/");
  };


  useEffect(() => {
  if (introStep === 0) {
    setTimeout(() => setIntroStep(1), 2000);
  } else if (introStep === 1) {
    setTimeout(() => setIntroStep(2), 2000);
  } else if (introStep === 2) {
    setTimeout(() => setIntroStep(3), 2000); 
  }
}, [introStep]);


  return (
    <div className='h-screen bg-[#F5F5DC] relative'>
      {introStep < 3 && (
  <div className="fixed inset-0 z-50 backdrop-blur-[20px] bg-black/10 flex items-center justify-center">
    <AnimatePresence mode="wait">
      {introStep === 0 && (
        <motion.div
          key="step0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="text-3xl font-semibold text-[#03374C] shadow-md bg-white px-10 py-8 rounded-lg"
        >
          Jawab pertanyaan dengan benar!
        </motion.div>
      )}

      {introStep === 1 && (
        <motion.img
          key="step1"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.3 }}
          src="/gambar/beready.png"
          alt="Be Ready"
          className="w-[400px]"
        />
      )}

      {introStep === 2 && (
        <motion.img
          key="step2"
          initial={{ x: -400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          src="/gambar/go.png"
          alt="Go"
          className="w-[390px]"
        />
      )}
    </AnimatePresence>
  </div>
)}

      <div className='absolute top-8 left-10 text-3xl font-semibold'>{current + 1}/10</div>
      <button onClick={handleExit} className='absolute right-13 cursor-pointer' >
        <img className='z-20 relative' src="/gambar/exit.png" alt="" />
      </button>

        <img className='absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-[64%]' src="/gambar/papantulis.png" alt="" />
        <img className='absolute right-[22%] top-10 hidden' src="/gambar/monyet.png" alt="" />
        <img className='absolute bottom-0 w-full' src="/gambar/ombak.png" alt="" />
        <img className='absolute top-0 left-0' src="/gambar/bintik.png" alt="" />
        <img className='absolute top-60 left-0' src="/gambar/bintik.png" alt="" />
        <img className='absolute top-90 left-0' src="/gambar/bintik.png" alt="" />
        <img className='absolute top-0 right-0' src="/gambar/bintik.png" alt="" />
        <img className='absolute top-60 right-0' src="/gambar/bintik.png" alt="" />
        <img className='absolute top-90 right-0' src="/gambar/bintik.png" alt="" />

        <h1 style={{ fontFamily: "Schoolbell" }} className='absolute max-md:text-xl max-md:w-100 top-[30%] font-school left-1/2 transform -translate-x-1/2 text-white text-4xl text-center w-[600px] px-8 '>{currentQuestion.question}</h1>

        <div className='absolute bottom-4 sm:bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 w-[95%] sm:w-[90%] md:w-[1200px] max-w-6xl px-4 sm:px-6 md:px-8 justify-center'>
        {currentQuestion.options.map((option, idx) => (
          <button 
            key={idx} 
            onClick={() => handleAnswer(idx)} 
            className='bg-white cursor-pointer relative text-left p-3 sm:p-4 rounded-xl text-[#03374C] hover:bg-blue-100 text-sm sm:text-base md:text-lg font-semibold items-center min-h-[60px] sm:min-h-[70px] md:min-h-[80px]'
          >
             <span className="font-bold mr-2 text-xl sm:text-2xl md:text-3xl text-[#03374C]">{String.fromCharCode(65 + idx)}.</span> 
             <span className="break-words">{option}</span>
             <img className='absolute -left-2 sm:-left-3 md:-left-5 -top-2 sm:-top-3 md:-top-5 z-0 w-4 sm:w-5 md:w-auto' src="/gambar/bintang.png" alt="" />
          </button>
        ))}
      </div>

        {showTransition && (
        <div className="fixed inset-0 z-50 backdrop-blur-[20px] bg-black/10 flex items-center justify-center">
          <div className="w-[200px] h-[200px] rounded-full border-8 border-blue-400 flex items-center justify-center text-6xl font-bold bg-white shadow-lg animate-scaleIn">
            {current + 2}
          </div>
        </div>
      )}

      {isFinished && (
        <div className=" h-screen  inset-0 z-30 backdrop-blur-[20px] bg-black/10 relative flex flex-col items-center justify-center text-center">
          <h1 className="text-7xl font-extrabold text-white mb-2 stroke-text">Skor Mu</h1>
          <h2 className="text-6xl font-extrabold text-white mb-6 stroke-text">{score}/10</h2>

            <img className='absolute top-0 left-0' src="/gambar/suprise-kiri.png" alt="" />
            <img className='absolute top-0 right-0' src="/gambar/suprise-kanan.png" alt="" />
            <img className='absolute bottom-0 left-0' src="/gambar/petasan-kiri.png" alt="" />
            <img className='absolute bottom-0 right-0' src="/gambar/petasan-kanan.png" alt="" />

          <div className="flex gap-4">
            <button
              onClick={() => navigate("/jawaban")}
              className="bg-[#68D4FF] hover:bg-sky-500  text-lg cursor-pointer text-black px-6 py-2 rounded-lg shadow-md"
            >
              Lihat Jawaban
            </button>
            <button
              onClick={() => navigate("/")}
              className="bg-[#68D4FF] hover:bg-sky-500 text-black text-lg cursor-pointer w-[140px] px-6 py-2 rounded-lg shadow-md"
            >
              Beranda
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
 
export default QuizPage
