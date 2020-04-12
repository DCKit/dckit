import { useSelector, useDispatch, shallowEqual as shallow } from 'react-redux'
import { select, dispatcher, useDidUpdate } from '../helpers/hooks'
import { TAct, Acts, IProcess } from '../types'
import { processStop } from './actions'

import {
  getProcess,
  getProcessResponse,
  isProcessRunning,
  isProcessSucceed,
  isProcessFailed,
} from './selectors'

// dispatchers hooks

export const useProcessStop = (itemType: string, act: TAct) =>
  dispatcher(
    useDispatch(),
    (itemType: string) => processStop(itemType, act),
    itemType
  )

const stop = (act: TAct) => (itemType: string) => useProcessStop(itemType, act)

export const useLoadStop = stop(Acts.Load)
export const useAddStop = stop(Acts.Add)
export const useUpdateStop = stop(Acts.Update)
export const useDeleteStop = stop(Acts.Delete)
export const useImportStop = stop(Acts.Import)
export const useExportStop = stop(Acts.Export)

// selector hooks

export const useProcess = (itemType: string, act: TAct): IProcess =>
  useSelector(select(getProcess, itemType, act), shallow)

export const useResponse = (itemType: string, act: TAct): any =>
  useSelector(select(getProcessResponse, itemType, act), shallow)

// isRunning hooks
export const useProcessRunning = (itemType: string, act: TAct): boolean =>
  useSelector(select(isProcessRunning, itemType, act), shallow)

const isRunning = (act: TAct) => (itemType: string) =>
  useProcessRunning(itemType, act)

export const useLoading = isRunning(Acts.Load)
export const useAdding = isRunning(Acts.Add)
export const useUpdating = isRunning(Acts.Update)
export const useDeleting = isRunning(Acts.Delete)
export const useImporting = isRunning(Acts.Import)
export const useExporting = isRunning(Acts.Export)

// isSucceed hooks
export const useProcessSucceed = (itemType: string, act: TAct): boolean =>
  useSelector(select(isProcessSucceed, itemType, act), shallow)

const isSucceed = (act: TAct) => (itemType: string) =>
  useProcessSucceed(itemType, act)

export const useLoadSucceed = isSucceed(Acts.Load)
export const useAddSucceed = isSucceed(Acts.Add)
export const useUpdateSucceed = isSucceed(Acts.Update)
export const useDeleteSucceed = isSucceed(Acts.Delete)
export const useImportSucceed = isSucceed(Acts.Import)
export const useExportSucceed = isSucceed(Acts.Export)

// isFailed hooks
export const useProcessFailed = (itemType: string, act: TAct): boolean =>
  useSelector(select(isProcessFailed, itemType, act), shallow)

const isFailed = (act: TAct) => (itemType: string) =>
  useProcessFailed(itemType, act)

export const useLoadFailed = isFailed(Acts.Load)
export const useAddFailed = isFailed(Acts.Add)
export const useUpdateFailed = isFailed(Acts.Update)
export const useDeleteFailed = isFailed(Acts.Delete)
export const useImportFailed = isFailed(Acts.Import)
export const useExportFailed = isFailed(Acts.Export)

// onSuccess callback hooks
export const useOnProcessSuccess = (
  itemType: string,
  act: TAct,
  callback: any
) => {
  const success = useProcessSucceed(itemType, act)
  useDidUpdate(callback, [success], success)
}

const onSuccess = (act: TAct) => (itemType: string, callback: any) =>
  useOnProcessSuccess(itemType, act, callback)

export const useOnLoadSuccess = onSuccess(Acts.Load)
export const useOnAddSuccess = onSuccess(Acts.Add)
export const useOnUpdateSuccess = onSuccess(Acts.Update)
export const useOnDeleteSuccess = onSuccess(Acts.Delete)
export const useOnImportSuccess = onSuccess(Acts.Import)
export const useOnExportSuccess = onSuccess(Acts.Export)

// onFail callback hooks
export const useOnProcessFail = (
  itemType: string,
  act: TAct,
  callback: any
) => {
  const failed = useProcessFailed(itemType, act)
  useDidUpdate(callback, [failed], failed)
}

const onFail = (act: TAct) => (itemType: string, callback: any) =>
  useOnProcessFail(itemType, act, callback)

export const useOnLoadFail = onFail(Acts.Load)
export const useOnAddFail = onFail(Acts.Add)
export const useOnUpdateFail = onFail(Acts.Update)
export const useOnDeleteFail = onFail(Acts.Delete)
export const useOnImportFail = onFail(Acts.Import)
export const useOnExportFail = onFail(Acts.Export)
