//Import Styles
import '../styles/LetterDisplay.scss'


//Import Material UI Components
import { Alert } from '@mui/material';
export const LetterDisplay = (props) => {
  
  // Return a random letter for user to guess the nato version for.
  const getRandomLetter = () => {
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabet = alpha.map((x) => String.fromCharCode(x));
    const selectedLetter = alphabet[Math.floor(Math.random() * 26)];
    return selectedLetter;
  }

  return (


    <div id="display">
      <h1 id="question-display">What is the NATO code word for the following letter?</h1>
      <h1 id="letter-display">{props.letter}</h1>
    </div>
  ) 
}