import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom' // we use curley braces as react-router-dom exports multiple components and to export a specific component we have to write it in curley brace

export default function Layout() {
	return (
		<>
			<Header></Header>
			<Outlet></Outlet>
			<Footer></Footer>
		</>
	)
}
