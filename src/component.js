import React from 'react'
import _ from 'lodash'
console.log(
  _.join(['Another', 'module', 'loaded!'], ' ')
)
export default class Hello extends React.Component {
  render() {
    return(
      <div>Hello world</div>
    )
  }
}