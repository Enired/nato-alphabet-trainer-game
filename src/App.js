//Importing Styles
import './App.css';

//Import helper functions
import { prepareNatoAnswer } from './helpers/natoAlphabet';
//Importing Components
import { LetterDisplay } from './components/LetterDisplay';
import { AnswerArea } from './components/AnswerArea';
import { useEffect, useState } from 'react';
function App() {
  const [letter, setLetter] = useState('')
  const [natoAnswer, setNatoAnswer] = useState('')
  const [userAnswer, setUserAnswer] = useState('')

  useEffect(()=>{
    setLetter(getRandomLetter())
  }, [])

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
      <AnswerArea 
      getRandomLetter={getRandomLetter} 
      setLetter={setLetter}
      setAnswer={setUserAnswer}
      answer={userAnswer}
      checkAnswer={checkAnswer}
      />
    </div>
  );
}

export default App;
