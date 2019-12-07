import { createSelector } from '@reduxjs/toolkit'
import { getDckState, get3rdParam } from '../helpers/selectors'
import { IState, IProcess } from '../types'

type getProcessStatus = (
  state: IState,
  itemType: string,
  process: string
) => boolean

type getProcessResponse = (
  state: IState,
  itemType: string,
  process: string
) => any

type getProcess = (state: IState, itemType: string, process: string) => IProcess
type getProcessState = (state: IState, itemType: string) => any

const _getProcessState = getDckState('processes')

const getProcessState: getProcessState = createSelector(
  _getProcessState,
  processState => processState
)

export const getProcess: getProcess = createSelector(
  [getProcessState, get3rdParam],
  (processState, act) => processState[act]
)

export const isProcessRunning: getProcessStatus = createSelector(
  getProcess,
  (process: IProcess) => Boolean(process?.running)
)

export const isProcessFinished: getProcessStatus = createSelector(
  getProcess,
  (process: IProcess) => Boolean(process?.finished)
)

export const isProcessSucceed: getProcessStatus = createSelector(
  [getProcess, isProcessRunning, isProcessFinished],
  (process: IProcess, running, finished) =>
    finished && !running && !process?.error
)

export const isProcessFailed: getProcessStatus = createSelector(
  isProcessSucceed,
  success => !success
)

export const getProcessResponse: getProcessResponse = createSelector(
  getProcess,
  (process: IProcess) => process?.response
)
