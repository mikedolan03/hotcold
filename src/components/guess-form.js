import React from 'react';

export default function GuessForm(props) {
    return (
        <form onSubmit={e => { 
            e.preventDefault(); 
            console.log('submitted');
            } }>
            <label htmlFor="guess" hidden>Guess</label>
            <input type="number"
                id="guess"
                name="guess"
                min="1" max="100"
                placeholder="Enter Your Guess" 
            />
            <button type="submit">Guess!</button>
        </form>
    );
}