// @flow

import 'babel-polyfill'

import React from 'react'
import { Switch, Route } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'

import LoginPage from './containers/LoginPage'

createGlobalStyle`
  body {
    margin: 0;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
const Wrapper = styled.div``

class App extends React.Component<{}> {
  render() {
    return (
      <Wrapper>
        <Switch>
          <Route path="/" component={LoginPage} exact />
        </Switch>
      </Wrapper>
    )
  }
}

export default App
