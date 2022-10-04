import "../styles/Timer.scss"

export const Timer = (props) => {
  return(
    <div id="timer">
      {props.time}
    </div>
  )
}