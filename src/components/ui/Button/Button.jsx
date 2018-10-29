// @flow

import React from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'

const Wrapper = styled.div``

@observer class Button extends React.Component<{}> {
  render() {
    return (
      <Wrapper />
    )
  }
}

export default Button
