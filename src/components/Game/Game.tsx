import styles from './Game.module.scss'
import questions from '../../questions.json'
import { Dispatch, SetStateAction, useState } from 'react';
import { Answers } from '../../types';

interface GameProps {
    step: number;
    setStep: Dispatch<SetStateAction<number>>;
    answers: Answers[];
    setAnswers: Dispatch<SetStateAction<Answers[]>>;
}

const Game: React.FC<GameProps> = ({ step, setStep, answers, setAnswers }) => {

    const [userAnswerIdx, setUserAnswerIdx] = useState<number | null>(null);
    const userAnswered = userAnswerIdx !== null;
    const resetUserAnswer = () => setUserAnswerIdx(null)

    // Если выбранный индекс совпадает с корректным, то передаем объект с данными: 
    // isCorrect: true, question: questions[step].title, userAnswer: item, correctAnswer: questions[step].options[i]

    // Если выбранный индекс НЕ совпадает с корректным, то передаем объект с данными:
    // isCorrect: false, question: questions[step].title, userAnswer: item, correctAnswer: questions[step].options[questions[step].correct]

    const handleClickAnswer = (item: string, i: number) => {
        if (userAnswerIdx !== null) {
            return;
        } else {
            setUserAnswerIdx(i)
        }

        if (i === questions[step].correct) {
            setAnswers((prev) => ([...prev, { isCorrect: true, question: questions[step].title, userAnswer: item, correctAnswer: questions[step].options[i] }]))

        } else {
            setAnswers((prev) => [...prev, { isCorrect: false, question: questions[step].title, userAnswer: item, correctAnswer: questions[step].options[questions[step].correct] }])
        }


    }

    const handleContinueClick = () => {
        resetUserAnswer()
        setStep((step) => step + 1)
    }

    return (
        <div className={styles.Game}>
            <div className={styles.Game__progress}>
                <div className={styles.Game__progress_value} style={{ width: `${step / questions.length * 100}%` }} ></div>
            </div>
            <div className={styles.Game__content}>
                <h2 className={styles.Game__content_title}>{questions[step].title}</h2>
                <ul className={styles.Game__content_list}>
                    {
                        questions[step].options.map((item, i) => (
                            <li
                                key={item}
                                className={`${userAnswerIdx === i ? `${styles.Game__content_list_item_answered}` : `${styles.Game__content_list_item}`}`}
                                onClick={() => handleClickAnswer(item, i)}
                            >{item}</li>
                        ))
                    }
                </ul>
            </div>
            <div className={styles.Game__next}>
                {
                    userAnswered ?
                        <button className={styles.Game__next_btn} onClick={() => handleContinueClick()}>Следующий вопрос</button>
                        : ''
                }

            </div>
        </div>
    )
}

export default Game