// @flow

import 'react-hot-loader/patch'
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import { basename } from './config'
import App from './components/App.jsx'

const renderApp = () => React.createElement(
  Router,
  { basename: basename || '' },
  React.createElement(App, null)
)

const root = document.getElementById('app')
if (root) {
  render(renderApp(), root)
}

// $FlowIgnore
if (module.hot) {
  module.hot.accept('./components/App.jsx', () => {
    require('./components/App.jsx')
    if (root) {
      render(renderApp(), root)
    }
  })
}
