// @flow

import React from 'react'
import styled from 'styled-components'
import { observer } from 'mobx-react'

import userStore from '../../../stores/UserStore'

const Wrapper = styled.div`
  margin: 50px;
`

@observer class LoginPage extends React.Component<{}> {
  async componentDidMount() {
    let { name } = await userStore.setUser({
      name: 'User Name',
      email: 'useremail',
    })
    console.log(`User set to ${name}`)
  }

  render() {
    return (
      <Wrapper>
        {userStore.user ? `Welcome, ${userStore.user.name}` : 'Loading...'}
      </Wrapper>
    )
  }
}

export default LoginPage
