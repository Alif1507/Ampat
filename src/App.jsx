import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './Landing';
import QuizPage from './QuizPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/quiz" element={<QuizPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;