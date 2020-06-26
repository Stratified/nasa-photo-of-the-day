import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: rgb(61, 61, 61);
	line-height: 2.5rem;
	font-size: 1.5rem;
  }`;

const StyledCard = styled.div`
	text-align: center;
	background-color: #242424;
	color: white;
	border: 1px solid black;
	border-radius: 50px;
	width: 50%;
	margin-top: 2%;
	height: 90%;
`;

const StyledImg = styled.img`
	width: 80%;
	border-radius: 25px;
	margin: 2.5%;
	max-height: 50vh;
`;

const Card = (props) => {
	return (
		<StyledCard>
			<div>Title: {props.data.title}</div>
			<div>Date: {props.data.date}</div>
			<StyledImg src={props.data.url} alt='Unavailable.' />
			<div>Explanation: {props.data.explanation}</div>
		</StyledCard>
	);
};

export default Card;
