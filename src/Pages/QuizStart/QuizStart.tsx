import styles from './QuizStart.module.scss'

interface QuizStartProps {
    onClickStart: VoidFunction;
}

const QuizStart: React.FC<QuizStartProps> = ({ onClickStart }) => {
    return (
        <div className={styles.QuizStart}>
            <h2 className={styles.QuizStart__title}>Пройти тест</h2>
            <button className={styles.QuizStart__btn} onClick={onClickStart}>Начать</button>
        </div>
    )
}

export default QuizStart