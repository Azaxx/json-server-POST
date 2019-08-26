import React from 'react';
import Input from './components/input';

 export default class App extends React.Component {
   state = {
     todo: []
   }

   componentDidMount = () => {
     fetch('http://localhost:3000/aza')
     .then(response => response.json())
     .then(result => this.setState({...this.state,todo:result}))
     .catch(err => console.log(err))
   }
  render() {
    return (
      <div className="App">
        <Input />
        {this.state.todo.map(item => <h1 key={item.id}>{item.name}</h1>)}
      </div>
    );
  }
}


