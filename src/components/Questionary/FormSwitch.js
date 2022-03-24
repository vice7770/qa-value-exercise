import { useState } from "react";

function FormSwitch({question, counter, nextQuestion, previousQuestion, questionLength}) {

    const [answer, setAnswer] = useState(question.responseOptions[0]);

    function changeValue(value){
        if(value === question.responseOptions[0])
            setAnswer(question.responseOptions[1]);
        if(value === question.responseOptions[1])
            setAnswer(question.responseOptions[0]);
    }

    return(
        <form class="bg-white dark:bg-gray-800 shadow-md rounded px-8 pt-6 pb-4 mb-4">
            <div class="flex items-center justify-center mb-10 ">
                <p class="text-black dark:text-white text-lg italic">
                    {question.question}
                </p>
            </div>
            <div class="flex items-center justify-evenly ">
                <p class="text-black dark:text-white italic">{question.responseOptions[0]}</p>
                <div class="form-check form-switch">
                <label for="toggle-example-checked" class="flex items-center cursor-pointer relative">
                    <input type="checkbox" id="toggle-example-checked" class="sr-only" value={answer} onChange={(e) => changeValue(e.target.value)}/>
                    <div class="toggle-bg bg-gray-200 border-2 border-gray-500 h-6 w-11 rounded-full"></div>
                    
                </label>
                </div>
                <p class="text-black dark:text-white italic">{question.responseOptions[1]}</p>
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
  
export default FormSwitch;