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


// В App передаем 2 страницы: Start и Quiz. 
// Создаем State с текущей страницей:  start и quiz и отображаем ту или иную

// В Start делаем при нажатии на кнопку запуск Quiz

// В Quiz делаем условие, что если вопросы кончились, то отображаем Result иначе Game