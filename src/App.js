import React from 'react';
import './App.css';
import Card from './Card';
import axios from 'axios';

function App() {
	axios
		.get('https://api.nasa.gov/planetary/apod ')
		.then((res) => {
			console.log(`Resolved: `, res);
		})
		.catch((err) => {
			console.log(`Error: `, err);
		});

	return (
		<div className='App'>
			<Card />
		</div>
	);
}

export default App;
