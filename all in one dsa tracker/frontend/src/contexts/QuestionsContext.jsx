import React, { createContext, useState, useContext } from 'react';
import axios from 'axios'

const QuestionsContext = createContext();

// custom created hook to use context
export const useQuestionContext = () => {
	return useContext(QuestionsContext);
};

export  const QuestionsContextProvider = ({ children }) => {
	const [dsaQuestions, setDsaQuestions] = useState([]);
	const [cpQuestions, setCpQuestions] = useState([]);
	

	const addQuestion = async (questionData) => {
		try {
			const response = await axios.post("http://localhost:5000/", questionData, {
				headers: {
					'Content-Type': 'application/json'           
				  }
			});
			if (response.status === 200) {
				console.log(response.data);
				if (questionData.type === 'dsa')
					setDsaQuestions((prevQuestions) => [...prevQuestions, response.data]);
				else setCpQuestions((prevQuestions) => [...prevQuestions, response.data]);
			}
		}
		catch (err) {
			console.error('Failed to add question.', err);
		}
	};

	const removeDsaQuestions = (id) => {
		setDsaQuestions((prevQuestions) => prevQuestions.filter((q) => q.id != id));
	};

	const removeCpQuestions = (id) => {
		setCpQuestions((prevQuestions) => prevQuestions.filter((q) => q.id != id));

	};

	const value = {
		setDsaQuestions,
		setCpQuestions,
		dsaQuestions,
		cpQuestions,
		addQuestion,
		removeCpQuestions,
		removeDsaQuestions,
	};

	return (
		<QuestionsContext.Provider value={value}>
			{children}
		</QuestionsContext.Provider>
	)
}