import React from 'react';
import './directions.css'; 

export default function Directions(props) {
    
    return (

    	<div className="directions"> 
    	<h2>What do I do?</h2>
        <p>This is a Hot or Cold Number Guessing Game. The game goes like this:</p>
        <ol>
        <li>I pick a random secret number between 1 to 100 and keep it hidden.</li>
        <li>You need to guess until you can find the hidden secret number.</li>
        <li>You will get feedback on how close ("hot") or far ("cold") your guess is.</li>
        </ol>
        <p>So, Are you ready?</p>

        <button onClick={() =>{ props.gotIt(); }}> Got it!</button>

    	</div>

    	);

} 