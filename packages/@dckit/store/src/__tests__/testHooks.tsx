import React, { useState } from 'react'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { dckReducer } from '../dck/reducer'
import { stateForHooks } from './testData'

const preloadedStore = () =>
  configureStore({
    reducer: combineReducers({
      dck: dckReducer,
    }),
    preloadedState: stateForHooks,
  })

export function testSelectorHook(hook: any) {
  const HookWrapper: React.FC = () => {
    const state = hook()
    return <pre data-testid="testid">{JSON.stringify(state)}</pre>
  }

  const store = preloadedStore()

  return render(
    <Provider store={store}>
      <HookWrapper />
    </Provider>
  )
}

export function testDispatcherHook(hook: any, ...args: any[]) {
  const HookWrapper: React.FC = () => {
    const [clicked, setClicked] = useState(false)
    const dispatch = hook()
    return (
      <>
        <button
          data-testid="testid"
          onClick={() => {
            dispatch(...args)
            setClicked(true)
          }}
        />
        {clicked && <pre data-testid="clicked" />}
      </>
    )
  }

  const store = preloadedStore()

  return render(
    <Provider store={store}>
      <HookWrapper />
    </Provider>
  )
}

export function testOnProcessStopHook(
  marker: string,
  testHook: any,
  stopHook: any,
  resetHook: any
) {
  const HookWrapper: React.FC = () => {
    const [clicked, setClicked] = useState(false)
    const stop = stopHook()
    const reset = resetHook()

    testHook(() => {
      setClicked(true)
      reset()
    })

    return (
      <>
        <button data-testid="testid" onClick={() => stop()} />
        {clicked && <pre>{marker}</pre>}
      </>
    )
  }

  const store = preloadedStore()

  return render(
    <Provider store={store}>
      <HookWrapper />
    </Provider>
  )
}
