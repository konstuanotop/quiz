import styles from './Game.module.scss'
import questions from '../../questions.json'
import { useState } from 'react';

interface GameProps {
    step: number;
    onStep: () => void;
    onClickAnswerCorrect: (item: string, i: number) => void;
    onClickAnswerUncorrect: (item: string) => void;
}

const Game: React.FC<GameProps> = ({ step, onStep, onClickAnswerCorrect, onClickAnswerUncorrect }) => {

    const [userAnswerIdx, setUserAnswerIdx] = useState<number | null>(null);
    const userAnswered = userAnswerIdx !== null;
    const resetUserAnswer = () => setUserAnswerIdx(null)


    const handleClickAnswer = (item: string, i: number) => {
        if (userAnswerIdx !== null) {
            return;
        } else {
            setUserAnswerIdx(i)
        }

        if (i === questions[step].correct) {
            onClickAnswerCorrect(item, i)

        } else {
            onClickAnswerUncorrect(item)
        }

    }

    const handleContinueClick = () => {
        resetUserAnswer()
        onStep()
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