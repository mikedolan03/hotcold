import React from 'react';
import './options-header.css';

export default function OptionsHeader(props) {
    
    return (
    	<header>
    	<nav className="options-header clear-fix"> 
    		<div className="left-floating">
    		<button onClick={() =>{ props.showButton();}}> What? </button>
                        
    		</div>
    		<div className="right-floating">
    		<button onClick={ () => { props.newGame();}}>+ NEW GAME</button>
    		</div>
    	</nav>
    	</header>

    	);

} 