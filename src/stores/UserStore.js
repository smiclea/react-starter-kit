// @flow

import { observable, action } from 'mobx'

import type { User } from '../types/User'

class UserStore {
  @observable user: ?User = null

  @action async setUser(user: User): Promise<User> {
    return new Promise(resolve => {
      setTimeout(() => {
        this.user = { ...user }
        resolve(this.user)
      }, 1000)
    })
  }

  @action setEmail(email: string) {
    if (!this.user) {
      return
    }

    this.user.email = email
  }
}

export default new UserStore()
