import { useState } from 'react'
import Game from '../../components/Game/Game'
import styles from './Quiz.module.scss'
import Result from '../../components/Result/Result'
import questions from '../../questions.json'
import { Answers } from '../../types'

interface QuizProps {
    onClickFinished: VoidFunction;
}

const Quiz: React.FC<QuizProps> = ({ onClickFinished }) => {

    const [step, setStep] = useState(0)
    const [answers, setAnswers] = useState<Answers[]>([])


    console.log(answers)

    return (
        <div className={styles.Quiz}>

            {
                questions.length > step ?
                    <Game step={step} setStep={setStep} answers={answers} setAnswers={setAnswers} />
                    :
                    <Result onClickFinished={onClickFinished} answers={answers} />
            }

        </div>
    )
}

export default Quiz