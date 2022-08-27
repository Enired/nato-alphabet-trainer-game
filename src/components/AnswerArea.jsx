//Import Styles
import { useState } from "react";
import "../styles/AnswerArea.scss"


//Importing Material UI Compenents
import { Button, Collapse, Alert } from "@mui/material";

export const AnswerArea = (props) => {
  // const [answer, setAnswer] = useState('');
  // const []
  const [wrongAnswer, setWrongAnswer] = useState(false)

  // const submitAnswer = () =>{
  //   console.log(answer)
  // }

  return (
    <div id="answer-area">

      <div className="text-area">

        <input 
        type="text" 
        name="answer" 
        id="answer" 
        maxLength={10}
        value={(props.answer.toUpperCase())}
        onChange={(event)=>props.setAnswer((event.target.value).toUpperCase())}
        />
        <Collapse in={wrongAnswer}>
          <Alert color="error" severity="error">This is a test</Alert>
        </Collapse>

      </div>
      <div className="answer-area-buttons">
        <Button 
        variant="contained"
        className="btn" 
        id="get-new-letter"
        onClick={()=>{props.setLetter(props.getRandomLetter())}}
        >
          New Letter
        </Button>

        <Button 
        variant="contained"
        className="btn" 
        id="submit-answer"
        onClick={()=>{
          if(!props.checkAnswer()){
            setWrongAnswer(true)
          };
          setTimeout(()=>{
            setWrongAnswer(false)
          },1500) 
          }}
        >
          Submit
        </Button>

        <Button 
        variant="contained"
        className="btn" 
        id="clear-answer"
        onClick={()=>props.setAnswer('')}
        >
          Clear
        </Button>

      </div>
    </div>
  )
}