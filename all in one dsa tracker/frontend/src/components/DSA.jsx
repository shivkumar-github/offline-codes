import React from 'react'
import QuestionForm from './QuestionForm'
import { useQuestionContext } from '../contexts/QuestionsContext.jsx'
import QuestionDetails from './QuestionDetails.jsx';

function DSA() {
	const { dsaQuestions } = useQuestionContext();
	return (

		<>
			<QuestionForm />
			<div>
				<h2>Previous Questions</h2>
				{
					(dsaQuestions.length>0) ? (
						dsaQuestions.map((question) => (<QuestionDetails id={question.id} question={question} />))
					) : (
						<p>No question is added</p>
					)
				}
			</div>
		</>
	)
}

export default DSA