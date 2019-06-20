import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import { a } from './tree-shaking'
class Search extends React.Component {
  render () {
    return (
      <div className="color_blue">
        Search
      </div>
    )
  }
}
ReactDOM.render(
  <Search/>,
  document.getElementById('root')
)
