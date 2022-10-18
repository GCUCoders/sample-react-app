import { useState } from 'react';
import './App.css';

function Button() {
	const [counter, setCounter] = useState(0);

	function updateCounter() {
		setCounter(counter + 1);
	}

	return (
		<div className="Button">
			<button onClick={updateCounter}>Click Me</button>
			<p>{counter}</p>
		</div>
	);
}

export default Button;
