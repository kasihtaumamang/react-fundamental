// Parent Component
import React, { useEffect, useRef, useState } from "react"
import Albums from "./components/Albums/main.albums"
import MainLayouts from "./components/Layouts/main.layouts"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const App = () => {
	return (
		<>
			<MainLayouts>
				<Router>
					<Routes>
						<Route path="/" element={<h1>HOMEPAGE</h1>}></Route>
						<Route path="/albums" element={<Albums />}></Route>
						<Route path="/post" element={<h1>POSTING</h1>}></Route>
						<Route path="*" element={<h1 className="text-center text-danger mt-3">404 NOT FOUND</h1>}></Route>
					</Routes>
				</Router>
			</MainLayouts>
		</>
	)
}

export default App