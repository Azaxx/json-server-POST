import React from 'react';

export default class Input extends React.Component{
  state = {
    name: '',
    isComplited: false
  }
  inputValue = (element) => {
    const val = element.target.value;
    this.setState({...this.state, name: val})
  }
  addTodo = () => {
    fetch('http://localhost:3000/aza', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(this.state)
    })
    .then(response => console.log(response))
    .catch(err => console.log(err));

  }
  render(){
    return(
      <>
      <input onChange={this.inputValue} value={this.state.name} type="text"/>
      <button onClick={this.addTodo}>Addtask</button>
      </>
    );
  }
}