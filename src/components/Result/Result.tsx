import { Answers } from '../../types';
import styles from './Result.module.scss'

interface ResultProps {
    onClickFinished: VoidFunction;
    answers: Answers[];
}

const Result: React.FC<ResultProps> = ({ onClickFinished, answers }) => {

    const mount = answers.reduce((acc, cur) => (
        cur.isCorrect ? acc + 1 : acc
    ), 0)

    return (
        <div className={styles.Result}>
            <table className={styles.Result__table}>
                <thead>
                    <tr>
                        <th>Результат</th>
                        <th>Вопрос</th>
                        <th>Твой ответ</th>
                        <th>Правильный ответ</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        answers.map((answer, i) => (
                            <tr
                                key={i}
                                className={`${answer.isCorrect ? `${styles.Result__table_correct}` : ''}`}>
                                <td>{`${answer.isCorrect ? 'Да' : 'Нет'}`}</td>
                                <td>{answer.question}</td>
                                <td>{answer.userAnswer}</td>
                                <td>{answer.correctAnswer}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            {
                <div className={styles.Result__text}>
                    Отвечено правильно {mount} из {answers.length}
                </div>
            }

            <div className={styles.Result__reset}>
                <button className={styles.Result__reset_btn} onClick={() => onClickFinished()}>Пройти тест снова</button>
            </div>
        </div>
    )
}

export default Result