import React from 'react'
import ReactDOM from 'react-dom'
import _ from 'lodash'
import '../assets/PMZD/pmzd.css'
import { a } from './tree-shaking.js'
import './search.less'
class Search extends React.Component {
  render () {
    return (
      <div className="color_blue font">
        Search
      </div>
    )
  }
}
ReactDOM.render(
  <Search/>,
  document.getElementById('root')
)
