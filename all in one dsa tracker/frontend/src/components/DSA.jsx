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
  const [questionCount, setQuestionCount] = useState(0);
  const [revisedQuestionCount, setRevisedQuestionCount] = useState(0);


  useEffect(() => {
    refreshDSAQuestions(from, to);
    fetchQuestionCount(from, to);
    fetchRevisedQuestionCount(from, to);
  }, [from, to]);

  const fetchQuestionCount = async (from, to) => {
    try {
      const response = await axios.get(`http://localhost:5000/questions/count`, {
        params: { type: 'dsa', from, to }
      });
      setQuestionCount(response.data.total);
    } catch (error) {
      console.error("Error fetching question count:", error);
      setQuestionCount(0);
    }
  };

  const fetchRevisedQuestionCount = async (from, to) => {
    try {
      const response = await axios.get(`http://localhost:5000/questions/revise-count`, {
        params: { type: 'dsa', from, to }
      });
      setRevisedQuestionCount(response.data.total);
    } catch (error) {
      console.error("Error fetching question count:", error);
      setRevisedQuestionCount(0);
    }
  }

  const refreshDSAQuestions = async (from = 'easy', to = 'hard') => {
    try {
      const response = await axios.get(`http://localhost:5000/dsa?from=${from}&to=${to}`);
      if (response.status === 200) { setDsaQuestions(response.data.dsa_questions); }
      else { setFetchFromDbErr('Failed to fetch DSA questions.'); }
    }
    catch (err) {
      // setFetchFromDbErr('We are currently having trouble in fetching your questions'); console.log(err);
    }
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
        {dsaQuestions.length > 0 ? (dsaQuestions.map((question) => (<QuestionDetails key={question.id} id={question.id} question={question} refreshDSAQuestions={refreshDSAQuestions} />))) : (<p>No question is added in selected category.</p>)}
        <h3>Total Questions: <span className="text-blue-600">{questionCount}</span></h3>
        <h3>Total Question To revise: <span className='text-blue-600'>{revisedQuestionCount }</span></h3>


        {fetchFromDbErr && <div>{fetchFromDbErr}</div>}
      </div>
    </>
  );
}

export default DSA;