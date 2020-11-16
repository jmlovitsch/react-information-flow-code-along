import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'
import Child from './Child'

class Parent extends Component {

  constructor() {
    super()
    this.state = {
      color: getRandomColor(),
      childrenColor: '#FFF'
    }
  }

  changeChildColor = (newChildColor) =>{
    this.setState({
      color: getRandomColor(),
      childrenColor: newChildColor
    })
  }

  render() {
    return (
      <div
      className="parent"
      style={{backgroundColor: this.state.color}}>
        <Child color={this.state.childrenColor} handleColorChange={this.changeChildColor}/>
        <Child color={this.state.childrenColor} handleColorChange={this.changeChildColor}/>
      </div>
    )
  }
}

export default Parent
