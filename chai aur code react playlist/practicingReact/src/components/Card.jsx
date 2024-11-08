import React from 'react'

function Card({ name, id, marks }) {
  return (
	  <div key={id}>Student with {name}, and id,  {id} have  marks, {marks }</div>
  )
}

export default Card