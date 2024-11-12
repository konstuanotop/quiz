import { useState } from 'react';
import styles from './App.module.scss';
import Quiz from './Pages/Quiz/Quiz';
import QuizStart from './Pages/QuizStart/QuizStart';

function App() {
  const [currentPage, setCurrentPage] = useState('start')

  return (
    <div className={styles.App}>
      {currentPage === 'start' && <QuizStart onClickStart={() => setCurrentPage('quiz')} />}
      {currentPage === 'quiz' && <Quiz onClickFinished={() => setCurrentPage('start')} />}
    </div>
  );
}

export default App;