import React, { Component } from 'react';

export default class EvenAndOdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ""
        }
    }
    handleChange(value) {
        this.setState({ userInput: value })
    }
    assignEvenAndOdds(userInput) {
        var evenArray = [], oddArray = [];
        userInput.split("").map((e,i,a)=>{
            if(e*1 == e && e !== " "){
                if (e*1 %2 === 0) {
                    evenArray.push(e*1)
                }
                else{
                    oddArray.push(e*1)
                }
            }
            return
        })
        this.setState({ "evenArray": evenArray, "oddArray": oddArray })
    }

    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange={(e) => { this.handleChange(e.target.value) }} placeholder="Please format like this: 1 2 3 4 5 6"></input>
                <button className="confirmationButton" onClick={() => { this.assignEvenAndOdds(this.state.userInput) }}>Split</button>
                <span className="resultsBox"> Evens: {JSON.stringify(this.state.evenArray)} </span>
                <span className="resultsBox"> Odds: {JSON.stringify(this.state.oddArray)} </span>
            </div>
        )
    }
}