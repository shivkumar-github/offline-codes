import React from 'react'

function QuestionDetails({ question }) {
  const { name, link, note, needRevision } = question;
  console.log(question);
  return (
    <div style={{display:'flex', flexDirection:'row'}}>
      <div>{name}</div>
      <div>{link}</div>
      <div>{note}</div>
      <div>{needRevision?'Need Revision':'No Revision Needed'}</div>
    </div>
  )
}

export default QuestionDetails