// @flow

import React from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'

const Wrapper = styled.div``

@observer class UserList extends React.Component<{}> {
  render() {
    return (
      <Wrapper>UserList</Wrapper>
    )
  }
}

export default UserList
