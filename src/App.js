//Importing Styles
import './App.css';

//Importing Components
import { LetterDisplay } from './components/LetterDisplay';
import { AnswerArea } from './components/AnswerArea';
import { useEffect, useState } from 'react';
function App() {
  const [letter, setLetter] = useState('')

  useEffect(()=>{
    setLetter(getRandomLetter())
  }, [])

  const getRandomLetter = () => {
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabet = alpha.map((x) => String.fromCharCode(x));
    const selectedLetter = alphabet[Math.floor(Math.random() * 26)];
    return selectedLetter;
  }
  return (
    <div className="App">
      <LetterDisplay letter={letter}/>
      <AnswerArea 
      getRandomLetter={getRandomLetter} 
      setLetter={setLetter}
      />
    </div>
  );
}

export default App;
