import React, { useState } from 'react'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { dckReducer } from '../dck/reducer'
import { stateForHooks as preloadedState } from './testData'

const store = configureStore({
  reducer: combineReducers({
    dck: dckReducer,
  }),
  preloadedState,
})

export function testSelectorHook(runHook: any) {
  const HookWrapper: React.FC = () => {
    const output = runHook()
    return <pre data-testid="testid">{JSON.stringify(output)}</pre>
  }

  return render(
    <Provider store={store}>
      <HookWrapper />
    </Provider>
  )
}

export function testDispatcherHook(runHook: any) {
  const HookWrapper: React.FC = () => {
    const [clicked, setClicked] = useState(false)
    const dispatcher = runHook()
    return (
      <>
        <button
          data-testid="testid"
          onClick={() => {
            dispatcher()
            setClicked(true)
          }}
        />
        {clicked && <pre data-testid="clicked" />}
      </>
    )
  }

  return render(
    <Provider store={store}>
      <HookWrapper />
    </Provider>
  )
}
