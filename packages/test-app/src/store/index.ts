import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { dckReducer } from '@dckit/store'
import { rootSaga } from './rootSaga'

const sagaMiddleware = createSagaMiddleware()
const loggerMiddleware = createLogger({
  collapsed: (getState: any, action: any, logEntry: any) => !logEntry.error,
})

const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]
if (process.env.NODE_ENV === 'development') middleware.unshift(loggerMiddleware)

const reducer = combineReducers({ dck: dckReducer })

export const store = configureStore({
  reducer,
  middleware,
  preloadedState: {},
})

sagaMiddleware.run(rootSaga)
