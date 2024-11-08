import { useState } from 'react'
import Card from './components/Card'

function App() {
  const studentInfo = [{ name: "student1", id: 1, marks: 1 }, { name: "student2", id: 2, marks: 2 }, { name: "student3", id: 3, marks: 3 }]
  return (
    <>
      {studentInfo.map((student) => (<Card id={student.id} name={student.name} marks={student.marks} />))}
    </>
  )
}

export default App
