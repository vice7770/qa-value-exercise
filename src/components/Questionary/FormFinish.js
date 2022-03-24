import { useState } from "react";

function FormFinish({resetQuestions, answers, QuestionsData}) {
    return(
        <div class="bg-white dark:bg-gray-800 shadow-md rounded px-8 pt-6 pb-4 mb-4">
            {
                QuestionsData.map((question, index) => (
                    <div class="flex items-center justify-start mb-10 ">
                        <p class="text-black dark:text-white text-lg italic">
                            Question {index + 1} : {question.answer === answers[index] ? ' Is Correct' : ` Is wrong, the correct answer is ${question.answer}`}
                        </p>
                    </div>
                ))
            }
            <div class="flex items-center justify-evenly mt-10">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-32" type="button" onClick={() => resetQuestions()}>
                    Play again
                </button>
            </div>
        </div>
    );
};
  
export default FormFinish;