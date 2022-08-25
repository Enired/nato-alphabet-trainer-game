//Import Styles
import "../styles/AnswerArea.scss"

export const AnswerArea = (props) => {
  return (
    <div id="answer-area">
      
      <div className="text-area">

        <input 
        type="text" 
        name="answer" 
        id="answer" 
        maxLength={10}
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
        >
          Submit
        </button>

        <button 
        className="btn" 
        id="clear-answer"
        >
          Clear
        </button>

      </div>
    </div>
  )
}