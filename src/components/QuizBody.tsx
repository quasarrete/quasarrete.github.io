import sign from '../images/signs/sign-giving-order-national-speed-limit.jpg'
import '../styles/quizbody.css'
import Questions from '../questions.json'
import React, { useState } from 'react'



export default function QuizBody() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [questionNumber, setQuestionNumber] = useState(0);
    const [currentScore, setCurrentScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [otherQuestions, setOtherQuestions] = useState(getOther3Questions());

    const handleAnswerOptionClick = (isCorrect: boolean) => {
        if(isCorrect){
            const score = currentScore + 1;
            setCurrentScore(score);
        }
        // const nextQuestion = currentQuestion + 1;
        const currentQ = questionNumber + 1;
		if (currentQ < 20) {
			setCurrentQuestion(getRandomInt(0,Questions.length));
            setQuestionNumber(currentQ);
            setOtherQuestions(getOther3Questions());
		} else {
			setShowScore(true);
		}    
        
    };

    const resetQuiz = () =>{
        setCurrentQuestion(getRandomInt(0, Questions.length));
        setQuestionNumber(0);
        setOtherQuestions(getOther3Questions());
        setShowScore(false);
        setCurrentScore(0);
    }

    function getOther3Questions(){
        let randomList: number[] = []
        for(let i = 0; i < 3; i++){
            let randomNumber = getRandomInt(0, Questions.length)
            console.log(randomNumber)
            if(randomNumber != currentQuestion){
                randomList.push(randomNumber);
            }
        }
        console.log(randomList);
       return randomList;
    }

    function getRandomInt(min : number, max : number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
      }

    return (
        <div className='app'>
			{showScore ? (
                <>
				<div className='score-section'>
					You scored {currentScore} out of {questionNumber+1}
				</div>
                <div>
                    <button onClick={resetQuiz}>Restart</button>
                </div>
                </>
			) : (
				<>
            <div className='question-section'>
                    <div className='question-count'>
                        <span>Question {questionNumber + 1}</span>/{20}
                    </div>
                    <div className='question-logo-section'>
                        <img src={Questions[currentQuestion].questionImage} className="question-image"/>
                    </div>
                </div>
                <div className='answer-section'>
                    {Questions[currentQuestion].answerOptions.map((answerOption) => (
                        <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                    ))}
                    {Questions[otherQuestions[0]].answerOptions.map((answerOption) => (
                        <button onClick={() => handleAnswerOptionClick(false)}>{answerOption.answerText}</button>
                    ))}
                    {Questions[otherQuestions[1]].answerOptions.map((answerOption) => (
                        <button onClick={() => handleAnswerOptionClick(false)}>{answerOption.answerText}</button>
                    ))}
                    {Questions[otherQuestions[2]].answerOptions.map((answerOption) => (
                        <button onClick={() => handleAnswerOptionClick(false)}>{answerOption.answerText}</button>
                    ))}
                </div>
                </>
			)}
		</div>
    )

}