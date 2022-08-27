//Importing Styles
import './App.css';

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
    prepareNatoAnswer(selectedLetter);
    return selectedLetter;
  }

  const prepareNatoAnswer = (letter) => {
    switch (letter.toLowerCase()) {
      case "a": return setNatoAnswer("ALPHA");
      case "b": return setNatoAnswer("BRAVO");
      case "c": return setNatoAnswer("CHARLIE");
      case "d": return setNatoAnswer("DELTA");
      case "e": return setNatoAnswer("ECHO");
      case "f": return setNatoAnswer("FOXTROT");
      case "g": return setNatoAnswer("GOLF");
      case "h": return setNatoAnswer("HOTEL");
      case "i": return setNatoAnswer("INDIA");
      case "j": return setNatoAnswer("JULIET");
      case "k": return setNatoAnswer("KILO");
      case "l": return setNatoAnswer("LIMA");
      case "m": return setNatoAnswer("MIKE");
      case "n": return setNatoAnswer("NOVEMBER");
      case "o": return setNatoAnswer("OSCAR");
      case "p": return setNatoAnswer("PAPA");
      case "q": return setNatoAnswer("QUEBEC");
      case "r": return setNatoAnswer("ROMEO");
      case "s": return setNatoAnswer("SIERRA");
      case "t": return setNatoAnswer("TANGO");
      case "u": return setNatoAnswer("UNIFORM");
      case "v": return setNatoAnswer("VICTOR");
      case "w": return setNatoAnswer("WHISKEY");
      case "x": return setNatoAnswer("RAY");
      case "y": return setNatoAnswer("YANKEE");
      case "z": return setNatoAnswer("ZULU");
    }
  }

  const checkAnswer = () => {
  const status = natoAnswer === userAnswer ? true : false
  console.log(natoAnswer)
  




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
