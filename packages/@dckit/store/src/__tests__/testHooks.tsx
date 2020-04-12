import React, { useState } from 'react'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { dckReducer } from '../dck/reducer'
import { stateForHooks as preloadedState } from './testData'

const store = () =>
  configureStore({
    reducer: combineReducers({
      dck: dckReducer,
    }),
    preloadedState,
  })

export function testSelectorHook(hook: any) {
  const HookWrapper: React.FC = () => {
    const state = hook()
    return <pre data-testid="testid">{JSON.stringify(state)}</pre>
  }

  return render(
    <Provider store={store()}>
      <HookWrapper />
    </Provider>
  )
}

export function testDispatcherHook(hook: any) {
  const HookWrapper: React.FC = () => {
    const [clicked, setClicked] = useState(false)
    const dispatch = hook()
    return (
      <>
        <button
          data-testid="testid"
          onClick={() => {
            dispatch()
            setClicked(true)
          }}
        />
        {clicked && <pre data-testid="clicked" />}
      </>
    )
  }

  return render(
    <Provider store={store()}>
      <HookWrapper />
    </Provider>
  )
}

export function testOnProcessStateHook(
  text: string,
  hook: any,
  dispatcher: any
) {
  const HookWrapper: React.FC = () => {
    const [clicked, setClicked] = useState(false)
    const dispatch = dispatcher()
    hook(() => setClicked(true))

    return (
      <>
        <button data-testid="testid" onClick={() => dispatch()} />
        {clicked && <pre>{text}</pre>}
      </>
    )
  }

  return render(
    <Provider store={store()}>
      <HookWrapper />
    </Provider>
  )
}
