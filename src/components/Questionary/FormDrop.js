import { useState } from "react";

function FormDrop({question, counter, setAnswers, nextQuestion, previousQuestion, questionLength}) {

    // function checkAnswer(answer){
        
    // }

    const [answer, setAnswer] = useState(question.responseOptions[0]);

    return(
        <form class="bg-white dark:bg-gray-800 shadow-md rounded px-8 pt-6 pb-4 mb-4">
            <div class="mb-5 ">
                <p class="text-black dark:text-white text-lg italic">
                    {question.question}
                </p>
            </div>
            <div class="flex items-center justify-center mb-10 mt-8">
                <div class="inline-block relative w-64">
                    <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" 
                        id="dropbox"
                        value={answer} 
                        onChange={(e) => setAnswer(e.target.value)}
                    >
                        {question.responseOptions.map((responseOption) => {
                            return <option value={responseOption}>{responseOption}</option>
                        })}
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </div>
            </div>
            <div class="flex items-center justify-evenly mt-10">
                {(counter > 0 ? (
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-32" type="button" onClick={() => previousQuestion()}>
                        Previous
                    </button>
                ) : null)}
                
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-32" type="button" onClick={() => nextQuestion(answer)}>
                    Next
                </button>
            </div>
            <div class="flex items-center justify-center mt-6">
                <p class="text-black dark:text-white italic">{counter + 1}/{questionLength}</p>
            </div>
        </form>
    );
    
};
  
export default FormDrop;