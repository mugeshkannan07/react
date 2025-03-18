import React, { useEffect, useState } from 'react'
import questionData from '../components/question.json'
import '../css/quiz.css'


export const Quiz = () => {
    const [currentQuestion, setcurrentQuestion] = useState(0);
    const [score,setScore] = useState(0);
    const [showScore,setShowScore] = useState(false);
    const [timer,setTimer] = useState(10);


    useEffect (() => {
        let interval;
        if(timer > 0 && !showScore){
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer-1)
            },1000)}
            else{
                clearInterval(interval)
                setShowScore(true)
            }
            return () => clearInterval(interval); // clearInterval cleanup function 
        },[timer,showScore])


        const handleAnswerClick = (selectedoption) => {
            if(selectedoption === questionData[currentQuestion].correctOption){
                setScore((score) => score + 1)
            }
            if(currentQuestion < questionData.length - 1){
                setcurrentQuestion((prevQuestion) => prevQuestion + 1)
                setTimer(10)
            }
            else{
                setShowScore(true)
            }
        }
       

    const Restart =() => {
        setcurrentQuestion(0)
        setShowScore(false)
        setScore(0)
        setTimer(10)
    }
  return (
   <div className='quiz_container'>
    { showScore ? (
        <div className='score_section'>
            <h2>Your Score: {score}/{questionData.length}</h2>
            <button className='btn' onClick={Restart}>Restart Quiz</button>
        </div>
    )
    :
    (
        <div className='question_section'>
            <h2>Question {currentQuestion + 1}</h2>
            <p>{questionData[currentQuestion].question}</p>

            <div className='options_container'>
                {questionData[currentQuestion].options.map((option, index) => (
                    <button 
                    className='option_btn'
                    key={index}
                    onClick={() => handleAnswerClick(option)}>
                    {option}
                    </button>
                ))}



            </div>
            <p className='timer'>Time : {timer}s</p>
        </div>
    )}
   </div>
  )
}
