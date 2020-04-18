import { createSelector } from '@reduxjs/toolkit'
import { getDckState, get3rdParam } from '../helpers/selectors'
import { TState, ProcessState } from '../types'

type getProcessStatus = (
  state: TState,
  itemType: string,
  process: string
) => boolean

type getProcessResponse = (
  state: TState,
  itemType: string,
  process: string
) => any

type getProcess = (
  state: TState,
  itemType: string,
  process: string
) => ProcessState
type getProcessState = (state: TState, itemType: string) => any

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
  (process: ProcessState) => Boolean(process?.running)
)

export const isProcessFinished: getProcessStatus = createSelector(
  getProcess,
  (process: ProcessState) => Boolean(process?.finished)
)

export const isProcessSucceed: getProcessStatus = createSelector(
  [getProcess, isProcessRunning, isProcessFinished],
  (process: ProcessState, running, finished) =>
    finished && !running && !process?.error
)

export const isProcessFailed: getProcessStatus = createSelector(
  [getProcess, isProcessRunning, isProcessFinished],
  (process: ProcessState, running, finished) =>
    finished && !running && process?.error
)

export const getProcessResponse: getProcessResponse = createSelector(
  getProcess,
  (process: ProcessState) => process?.response
)
