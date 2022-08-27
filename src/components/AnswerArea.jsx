//Import Styles
import { useState } from "react";
import "../styles/AnswerArea.scss"


//Importing Material UI Compenents
import { Button, Collapse, Alert } from "@mui/material";

export const AnswerArea = (props) => {
  // const [answer, setAnswer] = useState('');
  // const []
  const [wrongAnswer, setWrongAnswer] = useState(false)
  const [rightAnswer, setRightAnswer] = useState(false)

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
        autoComplete="off"
        value={(props.answer.toUpperCase())}
        onChange={(event)=>props.setAnswer((event.target.value).toUpperCase())}
        />
        <Collapse in={wrongAnswer}>
          <Alert className="answer-alert" color="error" severity="error">Incorrect</Alert>
        </Collapse>
        <Collapse in={rightAnswer}>
          <Alert className="answer-alert" color="success" severity="success">Hooray!</Alert>
        </Collapse>

      </div>
      <div className="answer-area-buttons">
        <Button 
        variant="contained"
        className="btn" 
        id="get-new-letter"
        onClick={()=>{
          props.setLetter(props.getRandomLetter()); 
          props.setAnswer('');
        }}
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
            setTimeout(()=>{
              setWrongAnswer(false)
              props.setAnswer('')
            },1000)
            return
          };
          setRightAnswer(true)
          setTimeout(()=>{
            setRightAnswer(false)
            props.setLetter(props.getRandomLetter());
            props.setAnswer('')
          }, 1000)



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