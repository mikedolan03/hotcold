import React from 'react';
import './guess-form.css';

export default function GuessForm(props) {

    let numberInput = 0;

    return (
        <form onSubmit={e => { 
            e.preventDefault(); 
            console.log('submitted');
            props.guessSubmit(numberInput.value);
            numberInput.value='';
            } }>
            <label htmlFor="guess" hidden>Guess</label>
            <input type="number"
                id="guess"
                name="guess"
                min="1" max="100"
                placeholder="Enter Your Guess" 
                ref={input => numberInput = input}
            />
            <button type="submit">Guess!</button>
        </form>
    );
}