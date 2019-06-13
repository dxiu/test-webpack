import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import './style.less'
import Hello from './component'
console.log(
  _.join(['33', '44', '55!'], ' ')
)
if (process.env.NODE_ENV !== 'production') {
  console.log('111111')
}
class Search extends React.Component {
  render () {
    return (
      <div className="color_blue">
        <Hello/>
      </div>
    )
  }
}
ReactDOM.render(
  <Search/>,
  document.getElementById('root')
)
