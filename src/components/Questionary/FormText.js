function FormText({question, counter, setCounter, nextQuestion, previousQuestion, questionLength}) {

    function submit(event){
        event.preventDefault();
        nextQuestion(event.target.answer.value);
        // console.log(event.target.answer.value);
        // setCounter(counter + 1);
    }    

    return(
        <form class="bg-white dark:bg-gray-800 shadow-md rounded px-8 pt-6 pb-4 mb-4" onSubmit={submit}>
            <div class="flex items-center justify-center mb-10 ">
                <p class="text-black dark:text-white text-lg italic">
                    {question.question}
                </p>
            </div>
            <div class="flex justify-center mb-5 mt-5">
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-black italic leading-tight focus:outline-none focus:shadow-outline" 
                    name="answer" 
                    type="answer"
                    required
                />
            </div>
            <div class="flex justify-center">
                <p class="text-black dark:text-white italic">
                    Hint: {question.hint}
                </p>
            </div>
            <div class="flex items-center justify-evenly mt-10">
                {(counter > 0 ? (
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-32" 
                        type="button" 
                        onClick={() => previousQuestion()}>
                        Previous
                    </button>
                ) : null)}
                
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-32"
                    type="submit" 
                    value="Submit"
                >
                    Next
                </button>
            </div>
            <div class="flex items-center justify-center mt-6">
                <p class="text-black dark:text-white italic">{counter + 1}/{questionLength}</p>
            </div>
        </form>
    );
};
  
export default FormText;