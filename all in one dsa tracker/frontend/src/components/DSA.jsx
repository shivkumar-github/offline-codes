import React, { useEffect, useState } from 'react';
import QuestionForm from './QuestionForm';
import { useQuestionContext } from '../contexts/QuestionsContext';
import QuestionDetails from './QuestionDetails';
import axios from 'axios';

function DSA() {
  const { dsaQuestions, setDsaQuestions } = useQuestionContext();
  const [fetchFromDbErr, setFetchFromDbErr] = useState('');

  useEffect(() => {
    refreshDSAQuestions();
  }, []);

  const refreshDSAQuestions = async () => {
    try {
      const response = await axios.get('http://localhost:5000/dsa'); // axios parses json data
      if (response.status === 200) { setDsaQuestions(response.data.dsa_questions); }
      else { setFetchFromDbErr('Failed to fetch DSA questions.'); }
    }
    catch (err) { setFetchFromDbErr('We are currently having trouble in fetching your questions'); }
  };

  return (
    <>
      <QuestionForm refreshDSAQuestions={refreshDSAQuestions} />
      <div>
        <h2>Previous Questions</h2>
        {dsaQuestions.length > 0 ? (
          dsaQuestions.map((question) => (
            <QuestionDetails key={question.id} id={question.id} question={question} refreshDSAQuestions={refreshDSAQuestions} />
          ))
        ) : (<p>No question is added</p>)}

        {fetchFromDbErr && <div>{fetchFromDbErr}</div>}
      </div>
    </>
  );
}

export default DSA;