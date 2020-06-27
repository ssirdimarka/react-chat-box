import React, { Component } from 'react'
import './App.css'
import Formulaire from'./compo/Formulaire'
import Messages from './compo/Messages'

class App extends Component {
  state ={
    messages : {  },
    pseudo : this.props.match.params.pseudo
  }
  addMessage = message => {
    const messages = {...this.state.messages}
    messages[`message-${Date.now()}`]= message
    this.setState({messages})
  }
  render () {
    return (
      <div className='box'>
        <div className='messages'>
          <Messages />
        </div>
        <Formulaire 
        pseudo = {this.state.pseudo}
        addMessage={this.addMessage}/>
      </div>
    )
  }
}

export default App
