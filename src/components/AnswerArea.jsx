//Import Styles
import { useState } from "react";
import "../styles/AnswerArea.scss"

export const AnswerArea = (props) => {
  const [answer, setAnswer] = useState('');

  const submitAnswer = () =>{
    console.log(answer)
  }

  return (
    <div id="answer-area">

      <div className="text-area">

        <input 
        type="text" 
        name="answer" 
        id="answer" 
        maxLength={10}
        value={answer}
        onChange={(event)=>setAnswer(event.target.value)}
        />

      </div>
      <div className="answer-area-buttons">
        <button 
        className="btn" 
        id="get-new-letter"
        >
          New Letter
        </button>

        <button 
        className="btn" 
        id="submit-answer"
        onClick={()=>{submitAnswer()}}
        >
          Submit
        </button>

        <button 
        className="btn" 
        id="clear-answer"
        onClick={()=>setAnswer('')}
        >
          Clear
        </button>

      </div>
    </div>
  )
}