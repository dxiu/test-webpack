import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
class Search extends React.Component {
  render () {
    return (
      <div className="hello">react dom</div>
    )
  }
}
ReactDOM.render(
  <Search/>,
  document.getElementById('root')
)
