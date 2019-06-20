import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import './style.less'
import {Hello, Border} from './component'
class Search extends React.Component {
  render () {
    return (
      <div className="color_blue">
        <Hello/>
        <Border/>
      </div>
    )
  }
}
ReactDOM.render(
  <Search/>,
  document.getElementById('root')
)
