import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import DSA from '../components/DSA'
import CP from '../components/CP'

export default function Home() {

	const [showDSA, toggleShowDSA] = useState(false)
	const [showCP, toggleShowCP] = useState(false)
	
	useEffect(() => {
		
	},[])

	return (
		<>
			<Navbar />
			<div className="main">
				<div>motivation</div>
				<div className='dsaQts'><button onClick={() => toggleShowDSA(!showDSA)}>dsa</button>

					{showDSA && <DSA />}
				</div>
				<div className="cpQts"><button onClick={() => toggleShowCP(!showCP)}>cp</button>
					{showCP && <CP />}
				</div>
			</div>
		</>
	)
}
