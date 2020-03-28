import SagaTester from 'redux-saga-tester'
import { combineReducers, Reducer } from 'redux'
import { dckActions, dckSelectors, dckReducer } from '../index'
import { ActionTypes, Acts } from '../types'
import { testFlowSaga } from './sagas'
import {
  TestItem,
  testItems,
  initialState,
  stateAfterLoadAllSaga,
} from './testData'
import { testLoadFetcher } from './fetchers'
import { Process } from '../helpers/processes'

const reducers: Reducer = combineReducers({
  dck: dckReducer,
})

function* getSession(request: any) {
  return yield {
    ...request,
    token: 'SESSION_TOKEN',
  }
}

describe('flow helpers', () => {
  Process.setFetcher(testLoadFetcher)
  Process.setExtendRequest(getSession)

  it('should successfully execute LoadAll flow', async () => {
    const sagaTester = new SagaTester({
      initialState,
      reducers,
    })
    sagaTester.start(testFlowSaga)
    expect(sagaTester.getState()).toEqual(initialState)

    sagaTester.dispatch(dckActions.loadItems(TestItem))
    await sagaTester.waitFor(ActionTypes.processStop)

    const state = sagaTester.getState()
    expect(state).toEqual(stateAfterLoadAllSaga)

    expect(dckSelectors.isProcessRunning(state, TestItem, Acts.Load)).toEqual(
      false
    )
    expect(dckSelectors.isProcessSucceed(state, TestItem, Acts.Load)).toEqual(
      true
    )
    expect(dckSelectors.getItems(state, TestItem)).toEqual(testItems)
  })
})
