import React, {Component} from 'react'

class Formulaire extends Component{
    state= {
        message :''
    }

    createMessage = () => {
        const { addMessage, pseudo} = this.props

        const message={
            pseudo,
            message : this.state.message
        }
        addMessage(message)

        
        this.setState({message : ' '})
    }


    handleChange= event => {
        const message = event.target.value
        this.setState({message})
    }
    
    handleSubmit= event => {
        event.preventDefault()
        this.createMessage()
    }
    render () {
        
        return (
            <form className='form'
            onSubmit={this.handleSubmit}>
                <textarea 
                value={this.state.message}
                onChange = {this.handleChange}
                required
                maxLength ='140' />
                <div className='info    '>140</div>
                <button type='submit'>send</button> 
            </form>
        )
    }
}

export default Formulaire