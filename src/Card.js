import React from 'react';

const Card = (props) => {
	return (
		<div className='card'>
			<div>Title: {props.data.title}</div>
			<div>Date: {props.data.date}</div>
			<img src={props.data.hdurl} alt='Unavailable.' />
			<div>Explanation: {props.data.explanation}</div>
		</div>
	);
};

export default Card;
