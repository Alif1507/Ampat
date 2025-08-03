import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './Landing';
import QuizPage from './QuizPage';
import Jawaban from './Jawaban';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/jawaban" element={<Jawaban/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;