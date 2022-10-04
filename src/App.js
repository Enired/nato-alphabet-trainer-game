//Importing Styles
import './App.css';

//Import helper functions
import { prepareNatoAnswer } from './helpers/natoAlphabet';
//Importing Components
import { LetterDisplay } from './components/LetterDisplay';
import { AnswerArea } from './components/AnswerArea';
import { Timer } from './components/Timer';
import { useEffect, useState } from 'react';
function App() {
  const [letter, setLetter] = useState('')
  const [natoAnswer, setNatoAnswer] = useState('')
  const [userAnswer, setUserAnswer] = useState('')
  const [time, setTime] = useState(10)
  const [running, setRunning] = useState(true);
  const [outOfTime, setOutOfTime] = useState(false)

  useEffect(()=>{
    setLetter(getRandomLetter())
  }, [])

  useEffect(()=>{
    let interval
    if(time>0){
      interval = setInterval(()=>{
        setTime((prev)=>(prev - 1))
      }, 1000)
    }
    else if(time<=0){
      clearInterval(interval)
      setOutOfTime(true)
      setTimeout(()=>{
        setOutOfTime(false)
        setLetter(getRandomLetter())
        setTime(10)
      },3000)
    }
    return () => clearInterval(interval)
  }, [time])



  const getRandomLetter = () => {
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabet = alpha.map((x) => String.fromCharCode(x));
    const selectedLetter = alphabet[Math.floor(Math.random() * 26)];
    setNatoAnswer(prepareNatoAnswer(selectedLetter));
    return selectedLetter;
  }

  const checkAnswer = () => {
  const status = natoAnswer === userAnswer ? true : false
  return status
  }
  
  return (
    <div className="App">
      <LetterDisplay letter={letter}/>
      <Timer time={time} setTime={setTime}/>
      <AnswerArea 
      getRandomLetter={getRandomLetter} 
      setLetter={setLetter}
      setAnswer={setUserAnswer}
      answer={userAnswer}
      checkAnswer={checkAnswer}
      time={time}
      setTime={setTime}
      outOfTime={outOfTime}
      natoAnswer={natoAnswer}
      />
    </div>
  );
}

export default App;
