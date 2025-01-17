import React, { useState } from 'react';
import axios from 'axios';
import { useQuestionContext } from '../contexts/QuestionsContext.jsx';

function QuestionForm() {

	const [name, setName] = useState('');
	const [link, setLink] = useState('');
	const [note, setNote] = useState('');
	const [type, setType] = useState('dsa');
	const [needRevision, setNeedRevision] = useState(false);
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');
	const { addQuestion } = useQuestionContext();

	const handleSubmit = async (e) => {
		e.preventDefault();
		
		const questionData = { name, link, note, type, needRevision };
		try {
				await addQuestion(questionData);
				setSuccess("Question added successfully!");
				setName('');
				setLink('');
				setNote('');
				setType('dsa');
				setNeedRevision(false);
				setError('');
		}
		catch(err) {
			setError('Failed to add Question. Please try again', err);
		}
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="name">Name of question</label>
				<input type="text" id='question-name' value={name} onChange={(e)=>setName(e.target.value)} required/>
				<label htmlFor="">link</label>
				<input type="url" id='link' value={link} onChange={(e)=> setLink(e.target.value)} required/>
				<label htmlFor="note-text">add a note</label>
				<input type="text" id='note-text' value={note} onChange={(e) => setNote(e.target.value)} />

				<label htmlFor="type">Type</label>
				<select name="type" id="type" value={type} onChange={(e) => setType(e.target.value)} required>
					<option value="dsa">DSA</option>
					<option value="cp">CP</option>
				</select>

				<label htmlFor="need-revision">Need Revision
					<input type="checkbox" id='need-revision' checked={ needRevision} onChange={()=>setNeedRevision((prev)=>!prev)} />
				</label>

				{error && <p style={{ color: 'red' }}>{error}</p>}
				{success && <p style={{ color: 'green' }}>{success}</p>}
				<button type='submit'>Add Question</button>
			</form>
		</div>
	)
}



export default QuestionForm;