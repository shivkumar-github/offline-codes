import React from 'react'

function QuestionDetails({name, link, note, needRevision }) {
  return (
    <div style={{display:'flex', flexDirection:'row'}}>
      <div>{name}</div>
      <div>{link}</div>
      <div>{note}</div>
      <div>{needRevision}</div>
    </div>
  )
}

export default QuestionDetails