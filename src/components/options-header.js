import React from 'react';

export default function OptionsHeader(props) {
    
    return (

    	<div className="options-header"> 
    		<div className="left-floating">
    		<button onClick={() =>{ props.showButton();}}> What? </button>
                        
    		</div>
    		<div className="right-floating">
    		<button onClick={ () => { props.newGame();}}>+ NEW GAME</button>
    		</div>
    	</div>

    	);

} 