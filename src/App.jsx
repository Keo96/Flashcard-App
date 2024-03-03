import { useState } from 'react'
import {FaArrowRight, FaArrowLeft} from 'react-icons/fa'
import questions from './Data/questions'
import FlashcardList from './Components/FlashcardList'
import './App.css'

const App = () => {
  const [category, setCategory] = useState('biology');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const filteredQuestions = questions.filter(question => question.category === category);

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setCurrentQuestionIndex(0);
  }

  const handleNext = () => {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } 
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <div className="App">
      <h1> The Ultimate Quiz Game</h1>
      <h4>Are you ready for a challenge? Put your knowledge to test! </h4>
      <p>Number of Cards: {filteredQuestions.length} </p>
      <label htmlFor="category">Select a category:  </label>
      <select value={category} onChange={handleCategoryChange}>
        <option value="biology">Biology</option>
        <option value="physics">Physics</option>
        <option value="movies">Movies</option>
        <option value="music">Music</option>
      </select>
      <div className="card-container">
      {filteredQuestions.length > 0 && (
        <FlashcardList questions={[filteredQuestions[currentQuestionIndex]]} />
      )}
      </div>
      <div className="navigation">
        <button onClick={handlePrevious}><FaArrowLeft /></button>
        <button onClick={handleNext}><FaArrowRight /></button>
      </div>
    </div>
  );
}

export default App
