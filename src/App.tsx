import Result from "./components/Result";
import starIcon from "./assets/Star.svg";
import { useState } from "react";

function App() {
  const ratingNumber = [1, 2, 3, 4, 5];

  const [chosenNumber, setChosenNumber] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  console.log(chosenNumber);

  return (
    <div className="w-full min-h-screen bg-veryDarkBlue flex justify-center items-center">
      <div className="bg-veryBlack w-[327px] md:w-[412px] p-8 rounded-[30px]">
        {!submitted ? (
          <>
            <div className="bg-darkBlue w-12 h-12 rounded-full flex justify-center items-center mb-[30px] font-bold">
              <img src={starIcon} alt="" /> 
            </div>
            
            <h1 className="text-pureWhite mb-6 font-bold text-[28px]">
              How did we do?
            </h1>
            
            <p className="text-lightGray pb-6">
              Please let us know how we did with your support request. All feedback is
              appreciated to help us improve our offering!
            </p>
            
            <ul className="flex items-center justify-between mb-8">
              {ratingNumber.map((number, index) => {
                const isSelected = chosenNumber === number;
                return (
                  <li key={index}
                    onClick={()=>setChosenNumber(number)}
                    aria-pressed={isSelected}
                    className={`rounded-full w-[51px] h-[51px] flex justify-center items-center cursor-pointer transition-colors ${isSelected ? 'bg-orange text-pureWhite' : 'bg-darkBlue text-lightGray hover:bg-lightGray hover:text-pureWhite'}`}
                  >
                    {number}
                  </li>
                );
              })}
            </ul>
            
            <button 
              onClick={() => { if (chosenNumber > 0) setSubmitted(true); }}
              className="bg-orange w-full py-[11px] rounded-[25px] text-pureWhite font-bold uppercase tracking-[2px] cursor-pointer hover:bg-white hover:text-orange transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={chosenNumber === 0}
            >
              Submit
            </button>
          </>
        ) : (
          <Result rating={chosenNumber}/>
        )}
      </div>
    </div>
  );
}

export default App;