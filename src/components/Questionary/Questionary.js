import FormDrop from "./FormDrop";
import FormSwitch from "./FormSwitch";
import FormText from "./FormText";
import {QuestionsData} from "../../QuestionsData";
import { useState } from "react";
import FormFinish from "./FormFinish";



function Questionary() {
    const [counter, setCounter] = useState(0);
    const [answers, setAnswers] = useState([]);
    const questionLength = QuestionsData.length;

    function nextQuestion(answer) {
        let answers_ = [...answers];
        answers_[counter] = answer;
        setAnswers(answers_);
        setCounter(counter + 1);
    } 
    function previousQuestion() {
        setCounter(counter - 1);
        console.log(answers);
    } 

    function resetQuestions() {
        setAnswers([]);
        setCounter(0);
    } 

    function getForm(responseType) {
        if(responseType === 1)
            return <FormDrop question={QuestionsData[counter]} counter={counter} setAnswers={setAnswers} nextQuestion={nextQuestion} previousQuestion={previousQuestion} questionLength={questionLength}/>
        else if(responseType === 2)
            return <FormSwitch question={QuestionsData[counter]} counter={counter} setAnswers={setAnswers} nextQuestion={nextQuestion} previousQuestion={previousQuestion} questionLength={questionLength}/>
        else if(responseType === 3)
            return <FormText question={QuestionsData[counter]} counter={counter} setAnswers={setAnswers} nextQuestion={nextQuestion} previousQuestion={previousQuestion} questionLength={questionLength}/>
    }
    return(
        <div className='content-form'>
            <div class="w-full max-w-sm">
                {
                    (counter < questionLength ? (
                        getForm(QuestionsData[counter].responseType)
                    ) : <FormFinish resetQuestions={resetQuestions} answers={answers} QuestionsData={QuestionsData}/>)
                }
            </div>
        </div>
    );
};
  
export default Questionary;




// (question.responseType === 1 ? (
//     <FormDrop question={question.question} counter={counter} setAnswers={setAnswers}/>
// ) : null)
// (question.responseType === 2 ? (
//     <FormSwitch question={question.question} counter={counter} setAnswers={setAnswers}/>
// ) : null)
// (question.responseType === 3 ? (
//     <FormText question={question.question} counter={counter} setAnswers={setAnswers}/>
// ) : null)