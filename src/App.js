//Importing Styles
import './App.css';

//Importing Components
import { LetterDisplay } from './components/LetterDisplay';
import { AnswerArea } from './components/AnswerArea';
function App() {
  return (
    <div className="App">
      <LetterDisplay/>
      <AnswerArea/>
    </div>
  );
}

export default App;
