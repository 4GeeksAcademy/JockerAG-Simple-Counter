import React, { useEffect } from "react";

//include images into your bundle
import { useState } from 'react'
import { SimpleCounter } from "./SimpleCounter.jsx";

//create your first component
const Home = () => {

const [counter, setCounter] = useState(0);
const [isRunning, setIsRunning] = useState(false)
const [initialCountInput, setInitialCountInput] = useState("");
const [initialCount, setInitialCount] = useState(0);

useEffect (() => {
	let interval;
	if (isRunning) {
		interval = setInterval(() => {
			setCounter(prevCounter => {
				if (initialCount > 0 ){
					return prevCounter - 1;
				} else {
					return prevCounter + 1;
				}
			});
	}, 1000);
}
	
	return () => clearInterval(interval);
}, [isRunning, initialCount]);

	const handleStart = () => {
			const parsedInitialCount = parseInt(initialCountInput, 10);
			const initialCountValue = !isNaN(parsedInitialCount) && parsedInitialCount > 0 ? parsedInitialCount : 0;  
			
			
		
			setCounter(initialCountValue);
			setInitialCount(initialCountValue);
			setInitialCountInput("");
			setIsRunning(true);
		}
	

	const handleStop = () => {
		setIsRunning(false)
	}

	const handleReset = () => {
		setIsRunning(false);
		setCounter(initialCount);
		setInitialCountInput("")
	};

	const handleInputChange = (event) => {
		setInitialCountInput(event.target.value)
	}

	return (
		<div className="container-fluid">
			<SimpleCounter 
			thousandDigit = {Math.floor(counter / 1000) % 10}
			hundredsDigit = {Math.floor(counter / 100) % 10}
			tensDigit = {Math.floor(counter / 10) % 10}
			onesDigit = {counter % 10}
			/>
			<div className="container d-flex justify-content-center"> 
				
				<button type="button" class="btn btn-primary btn-lg" onClick={handleStart}>Start</button>
				<input type="number" className="input-group-sm ms-4" placeholder="Número inicial" value={initialCountInput} onChange={handleInputChange}></input>
				<button type="button" class="btn btn-danger btn-lg ms-4" onClick={handleStop}>Stop</button>
				<button type="button" class="btn btn-warning btn-lg ms-4" onClick={handleReset}><i class="fa-solid fa-clock-rotate-left"></i> Reset</button>
			</div>	
		</div>
	);
};

export default Home;
