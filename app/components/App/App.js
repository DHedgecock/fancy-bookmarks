import React, { Component, createElement } from 'react'
import { ThemeProvider } from 'styled-components'

import Nav from './Nav'
import ListScreen from '../ListScreen'
import PriorityScreen from '../PriorityScreen'
import theme from '../../theme'

// ========================================================
// Application routing definition
// ========================================================

// Fake router until decision on RFR
const routes = {
  '/list': ListScreen,
  '/priority': PriorityScreen
}

// ========================================================
// Application container component
// ========================================================

export default class App extends Component {
  state = {
    screen: ListScreen
  }

  navigate = route => {
    this.setState({ screen: routes[route] })
  }

  render () {
    return (
      <ThemeProvider theme={theme}>
        {/* Router goes here next */}
        <div>
          <Nav navigate={this.navigate} />
          {createElement(this.state.screen)}
        </div>
      </ThemeProvider>
    )
  }
}
