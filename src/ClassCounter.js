import React, { Component } from 'react'

export default class ClassCounter extends Component {
    constructor(props){
        super(props)
        this.state ={
            count : 0
        }
    }
    HandleIncrease = (e) =>{
        e.preventDefault();
        this.setState({count: ++this.state.count  })
    }
    HandleDecrease = () =>{
        this.setState({count: --this.state.count  })
    }

  render() {
    return (
    <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
      <h1>Class Counter</h1>
      <h1>Counter : {this.state.count}</h1>
      <div>
      <button onClick={this.HandleIncrease}>Increase</button>
      <button onClick={this.HandleDecrease}>Decrease</button>
      </div>
    </div>
    )
  }
}
