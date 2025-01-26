import React, { useState } from 'react'
import DSA from '../components/DSA'
import CP from '../components/CP'

export default function Home() {

	const [showDSA, toggleShowDSA] = useState(false)
	const [showCP, toggleShowCP] = useState(false)

	return (
		<>
			<div className="main">
				<div className='dsaQts'>
					<button onClick={() => toggleShowDSA((showDSA) => !showDSA)}>dsa</button>
					{showDSA && <DSA />}
				</div>

				<div className="cpQts"><button onClick={() => toggleShowCP((showCP) => !showCP)}>cp</button>
					{showCP && <CP />}
				</div>
			</div>
		</>
	)
}
