import React from 'react'
import ReactDOM from 'react-dom'
import './style.less'
import Hello from './hello'
class Search extends React.Component {
  render () {
    return (
      <div className="hello">
        <Hello/>
      </div>
    )
  }
}
ReactDOM.render(
  <Search/>,
  document.getElementById('root')
)
