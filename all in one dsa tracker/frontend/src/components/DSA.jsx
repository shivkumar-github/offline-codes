import React, { useEffect, useState } from 'react';
import QuestionForm from './QuestionForm';
import { useQuestionsContext } from '../contexts/QuestionsContext';
import QuestionDetails from './QuestionDetails';
import axios from 'axios';

function DSA() {
  const { dsaQuestions, setDsaQuestions } = useQuestionsContext();
  const [fetchFromDbErr, setFetchFromDbErr] = useState('');
  const [from, setFrom] = useState('easy');
  const [to, setTo] = useState('hard');

  useEffect(() => { refreshDSAQuestions(); }, [from, to]);

  const refreshDSAQuestions = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/dsa?from=${from}&to=${to}`);
      if (response.status === 200) { setDsaQuestions(response.data.dsa_questions); }
      else { setFetchFromDbErr('Failed to fetch DSA questions.'); }
    }
    catch (err) { setFetchFromDbErr('We are currently having trouble in fetching your questions'); console.log(err); }
  };

  return (
    <>
      <QuestionForm refreshDSAQuestions={refreshDSAQuestions} />
      <div>
        <div className="search-bar">
          {/* passing them as parameter */}
          <h2>Difficulty range</h2>
          <label htmlFor="from">from: </label>
          <select name="from" id="from" value={from} onChange={(e) => setFrom(e.target.value)} ><option value="easy">Easy</option><option value="medium">Medium</option><option value="hard">Hard</option></select>
          <label htmlFor="to">to: </label>
          <select name="to" id="to" value={to} onChange={(e) => setTo(e.target.value)} ><option value="easy">Easy</option><option value="medium">Medium</option><option value="hard">Hard</option></select>
        </div>

        <h2>Previous Questions</h2>
        {console.log(dsaQuestions)}
        {dsaQuestions.length > 0 ? (dsaQuestions.map((question) => (<QuestionDetails key={question.id} id={question.id} question={question} refreshDSAQuestions={refreshDSAQuestions} />))) : (<p>No question is added in selected category.</p>)}

        {fetchFromDbErr && <div>{fetchFromDbErr}</div>}
      </div>
    </>
  );
}

export default DSA;