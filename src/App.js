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

  // const prepareNatoAnswer = (letter) => {
  //   switch (letter.toLowerCase()) {
  //     case "a": return "ALPHA"
  //     case "b": return "BRAVO"
  //     case "c": return "CHARLIE"
  //     case "d": return "DELTA"
  //     case "e": return "ECHO"
  //     case "f": return "FOXTROT"
  //     case "g": return "GOLF"
  //     case "h": return "HOTEL"
  //     case "i": return "INDIA"
  //     case "j": return "JULIET"
  //     case "k": return "KILO"
  //     case "l": return "LIMA"
  //     case "m": return "MIKE"
  //     case "n": return "NOVEMBER"
  //     case "o": return "OSCAR"
  //     case "p": return "PAPA"
  //     case "q": return "QUEBEC"
  //     case "r": return "ROMEO"
  //     case "s": return "SIERRA"
  //     case "t": return "TANGO"
  //     case "u": return "UNIFORM"
  //     case "v": return "VICTOR"
  //     case "w": return "WHISKEY"
  //     case "x": return "RAY"
  //     case "y": return "YANKEE"
  //     case "z": return "ZULU";
  //   }
  // }

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
