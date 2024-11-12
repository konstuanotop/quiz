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

    const [step, setStep] = useState<number>(0)
    const [answers, setAnswers] = useState<Answers[]>([])

    const handleStep = () => {
        setStep((step) => step + 1)
    }

    const handleAnswerCorrect = (item: string, i: number) => {
        setAnswers((prev) => ([...prev, { isCorrect: true, question: questions[step].title, userAnswer: item, correctAnswer: questions[step].options[i] }]))
    }

    const handleAnswerUncorrect = (item: string) => {
        setAnswers((prev) => [...prev, { isCorrect: false, question: questions[step].title, userAnswer: item, correctAnswer: questions[step].options[questions[step].correct] }])
    }

    return (
        <div className={styles.Quiz}>

            {
                questions.length > step ?
                    <Game step={step} onStep={handleStep} onClickAnswerCorrect={handleAnswerCorrect} onClickAnswerUncorrect={handleAnswerUncorrect} />
                    :
                    <Result onClickFinished={onClickFinished} answers={answers} />
            }

        </div>
    )
}

export default Quiz