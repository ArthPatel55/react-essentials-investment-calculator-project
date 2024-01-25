import Header from "./components/Header"
import Results from "./components/Results";
import Userinput from "./components/Userinput"
import React, { useState } from 'react';

function App() {
  const [userInput,setUserInput] = useState({
    initialInvestment:10000,
    annualInvestment:1200,
    expectedReturn:6,
    duration:10
});

const inputIsValid = userInput.duration >= 1;

function handleChange(inputIdentifier,newValue){
  setUserInput(pervUserInput=>{
      return{
          ...pervUserInput,[inputIdentifier]: +newValue
      };
  });
}
  return (
    <>
      <Header/>
      <Userinput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && 
      <p className="center" >Please enter a duration greater than zero.</p>}
      { inputIsValid && <Results input={userInput}/>}
    </>
  );
}

export default App
