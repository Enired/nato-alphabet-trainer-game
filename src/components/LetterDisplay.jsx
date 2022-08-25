export const LetterDisplay = (props) => {
  
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x));
  const selectedLetter = alphabet[Math.floor(Math.random() * 26)]


  return (
    <div id="letter-display">
      {selectedLetter}
    </div>
  ) 
}