import React from 'react';
import GuessForm from './guess-form';
import OptionsHeader from './options-header';
import Directions from './directions';
import './game-board.css';

export default class GameBoard extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
            showingDirections: false,
            guesses: [],
            randomNumber: Math.floor((Math.random() * Math.floor(100) )+ 1),
            temperature: "cold"
        }

        console.log("number to guess: ",this.state.randomNumber);
	}

	setShowingDirections(showing) {
    
    	this.setState({
          showingDirections: showing
    	});
    }

    setTemperature(temperature) {
    	this.setState({temperature: temperature});


    }

    addNewGuess(newGuess) {
    

    	let newGuessArray = this.state.guesses.slice();
		newGuessArray.push(newGuess);
		this.setState({guesses: newGuessArray});

		if(newGuess == this.state.randomNumber)
		{
			console.log('player wins!');
			this.setTemperature("Got it!");


		} else 
		{
			let distance = Math.abs(this.state.randomNumber - newGuess);
			console.log("numbers: "+this.state.randomNumber+"- "+newGuess+" d:"+ distance)

			if(distance < 5) { 
				this.setTemperature("Hot");
				 console.log("less than 10");
			} else {
				if(distance < 10) { 
					this.setTemperature("Kinda Hot");
				console.log("less than 10");

				} else {
					if(distance < 20) {
						this.setTemperature("Warm");
					 console.log("less than 20");

					} else {
						if(distance <=25 ){
							this.setTemperature("Less than warm");
							console.log("less than 25");

						} else {
							if(distance > 25 ) {
								this.setTemperature("Cold");
							console.log("over than 25");

							}
						}
					}
				}
			}


		}
  
  	}

  	newGame() {
  		this.setState( {
  			showingDirections: false,
  			guesses: [],
  			temperature: "cold",
            randomNumber: Math.floor((Math.random() * Math.floor(100) )+ 1),
  		});

  		console.log("number to guess: ",this.state.randomNumber);

  	}

	render() {

		//test if directions showing - display directions component else game
		console.log('sd= ', this.state.showingDirections);

		if(this.state.showingDirections === true) {

		return ( 
			<Directions gotIt= { ()=> this.setShowingDirections(false)} /> 
			); 


		}  else {

			let topMessage = '';
			let showGuessForm = '';
			let pastGuesses = ''; 

			if(this.state.guesses.length > 0) {

				//pastGuesses = <span>Last Guess</span>;
				
				for(let i = 0; i < this.state.guesses.length; i++) {
					pastGuesses += this.state.guesses[i] + ' ';

					} 

					console.log('pastGuesses',pastGuesses);
			}

			if(this.state.temperature === "Got it!") {
				topMessage = 'You Won. Click new game to play again';


			} else { 

				showGuessForm = <GuessForm guessSubmit= {(newGuess)=> this.addNewGuess(newGuess)}/> ;

					 if(this.state.guesses.length <=0) { 
						topMessage = 'Make your Guess'; 
					 } else {
							 topMessage = this.state.temperature; 
							}
					}

			return ( 

				<div className='game-container'>
				<div className='options-header'>
				<OptionsHeader showButton= { ()=> this.setShowingDirections(true) }
							   newGame= { ()=> this.newGame() }
				/>
				</div>


				<div class='game-title'><h1>Hot or Cold</h1></div>
				<div className="guess-form-box">

				<h2>{topMessage}</h2>

				{showGuessForm}
				
				<div>
				Guess #<span className="orange-big guess-count">{this.state.guesses.length}</span>
				</div>
				<div>
				{pastGuesses}
				</div>

				</div>

			</div>


			);
		}
	}

}
