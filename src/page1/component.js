import React from 'react'
import _ from 'lodash'
export class Hello extends React.Component {
  render() {
    return(
      <div>Hello world</div>
    )
  }
}
export class Border extends React.Component {
  componentDidMount() {
    console.log('componentDidMount')
  }
  componentWillMount() {
    console.log('componentWillMount')
  }
  render () {
    return (
      <div className="bg flex">
        <div className="left_box">left</div>
        <div className="right_box">right</div>
      </div>
    )
  }
}