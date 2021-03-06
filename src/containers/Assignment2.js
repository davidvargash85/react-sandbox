import React, { Component }  from 'react';
import Validator from './Validator/Validator'
import CharComponent from './CharComponent/CharComponent'
import './App.css';
// import UniqId from 'uniqid';

export default class Assignment2 extends Component {

    state = {
        inputValue: ''
    }

    changeHandler = (event) => {
        this.setState({
            inputValue: event.target.value
        });
    };

    charClickHandler = (index) => {
        const copy = [...this.state.inputValue];
        copy.splice(index, 1);
        this.setState({
            inputValue: copy.join('')
        });
    };

    render() {

        const style = {
            width: '300px',
            margin: '10px auto',
            textAlign: 'center',
            padding: '10px',
            border: 'solid 1px gray',
            backgroundColor: '#ddd'
        };

        const letters = (
            this.state.inputValue.length > 0 ? 
            <div>
                {
                    [...this.state.inputValue].map( (l,i) => {
                        return <CharComponent letter={l} key={i} click={this.charClickHandler.bind(this, i)} />
                    })
                }
                <p><span style={{fontStyle: 'italic'}}>click any letter...</span></p>
            </div> : null
        );

        return (
            <div className="App">
                <div style={style}>
                    <input type="text" onChange={this.changeHandler} value={this.state.inputValue} style={{height: '20px', borderColor: 'blue'}}/>
                    <p>The input length is: <span style={{fontWeight: 'bold'}}>{this.state.inputValue.length}</span></p>
                    <Validator size={this.state.inputValue.length}/>
                </div>
                {letters}
            </div>
        );
    }
}

/*
 * 
*                 <ol>
    <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
    <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
    <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
    <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
    <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
    <li>When you click a CharComponent, it should be removed from the entered text.</li>
</ol>
<p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
 * 
 */