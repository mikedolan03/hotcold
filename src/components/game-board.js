import React from 'react';
import GuessForm from './guess-form';
import OptionsHeader from './options-header';

export default class GameBoard extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
            showingDirections: false,
            guesses: [],

        }
	}

	setShowingDirections(showing) {
    
    	this.setState({
          showingDirections: showing
    	});
    }

    addNewGuess(newGuess) {
    

    	let newGuessArray = this.state.guesses.slice();
		newGuessArray.push(newGuess);
		this.setState({guesses: newGuessArray});
  
  	}

	render() {

		//test if directions showing - display directions component else game

		return ( 

			<div className='game-container'>
				<div className='options-header'>
				<OptionsHeader />
				</div>



				<div className="gues-form-box">
				<h2>Make you Guess</h2>
				<GuessForm />
				
				<div>
				Guess #<span className="orange-big guess-count">{this.state.guesses.length-1}</span>
				</div>
				<div>
				Last Guess <span className="blue-box last-guess">{this.state.guesses[this.state.guesses.length-1]}</span>
				</div>

				</div>

			</div>


			);
	}

}
