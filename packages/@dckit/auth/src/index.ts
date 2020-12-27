//import * as React from 'react'
import Auth from '@aws-amplify/auth'
import { sleep } from 'utils'

export function authConfigure(config: any) {
  try {
    Auth.configure(config)
  } catch (e) {
    console.error("Can't configure aws-amplify Auth: ", e)
  }
}

let currentUser: any = null

export const authGetCurrentUser = async (params: any) => {
  try {
    currentUser = await Auth.currentAuthenticatedUser()
  } catch (e) {
    if (currentUser?.challengeName !== 'NEW_PASSWORD_REQUIRED') {
      throw new Error(e.toString())
    }
  }
  return currentUser
}

export const authSignIn = async (params: any) => {
  const { email, password } = params
  currentUser = await Auth.signIn(email, password)
  return currentUser
}
export const authChangePassword = async (params: any) => {
  const { user, password } = params
  currentUser = await Auth.completeNewPassword(user || currentUser, password)
  return currentUser
}

export function newPasswordRequired(user: any) {
  return user?.challengeName === 'NEW_PASSWORD_REQUIRED'
}

export function getChallengeEmail(user: any) {
  return user?.challengeParam?.userAttributes?.email
}

export const authSignOut = async () => await Auth.signOut()

export const authResetPassword = async (params: any) => {
  const { email } = params
  return await Auth.forgotPassword(email)
}

export const authConfirmPassword = async (params: any) => {
  const { email, code, password } = params
  await Auth.forgotPasswordSubmit(email, code, password)
  await sleep(700)
  await authSignIn(params)
}

export const authGetToken = async () => {
  const session = await Auth.currentSession()
  const accessToken = session.getAccessToken()
  return accessToken.getJwtToken()
}
