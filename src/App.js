import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './Card';
import axios from 'axios';

const App = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		axios
			.get(
				'https://api.nasa.gov/planetary/apod?api_key=2vNoFF6i7IRjiJhbdhnDimYLkFvWNcY0i1xwcdh7'
			)
			.then((res) => {
				setData(res.data);
				console.log(`Resolved: `, res.data);
			})
			.catch((err) => {
				console.log(`Error: `, err);
			});
	}, []);

	return (
		<div className='App'>
			<Card data={data} />
		</div>
	);
};

export default App;
