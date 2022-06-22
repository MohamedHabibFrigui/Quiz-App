import React, { useEffect } from 'react';
import IntroPage from './IntroPage';
import MainPage from './MainPage';
import './App.css';
import { useState } from 'react';

function App() {
  const [began, setBegan] = useState(false)
  const [data, setData] = useState()

  function handleBegan() {
    setBegan(prevBegan => !prevBegan)
  }

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=4&category=18")
      .then(res => res.json())
      .then(data => setData(data))
  }, [began])
    

  return (
    <div className="container">
      {!began && <IntroPage handleBegan={handleBegan} />}
      {began && <MainPage data={data.results} handleBegan={handleBegan} />}
    </div>
  );
}
export default App;
// [
//   {
//     category: "",
//     correct_answer: "",
//     difficulty: "",
//     incorrect_answers: [1, 2, 3],
//     queston: "",
//     type: ""
//   },
//   {

//   }
// ]