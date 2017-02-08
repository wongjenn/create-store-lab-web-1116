import React, { Component } from 'react';

class UserInput extends Component {
  constructor(){
    super()
    this.state = {
      userName: "",
      hometown: ""
    }
  }

  componentDidMount(){
    this.props.store.subscribe( this.forceUpdate.bind(this) )
  }

  handleUserName(event){
    this.setState({userName: event.target.value})
  }

  handleHometown(event){
    this.setState({hometown: event.target.value})
  }

  handleSubmit(event){
    this.props.store.dispatch({type: 'ADD_USER', payload: this.state })
  }

  render(){
    return(
      <div>
        <form onSubmit={ this.handleSubmit.bind(this) }>
          <p> <label> Username: </label>
          <input type="text" value={this.state.userName} onChange={this.handleUserName.bind(this)}/></p>
          <p> <label> Hometown: </label>
          <input type="text" value={this.state.hometown} onChange={this.handleHometown.bind(this)}/></p>
          <p><input type="submit"/></p>
        </form>
      </div>
    )
  }
}

export default UserInput;
