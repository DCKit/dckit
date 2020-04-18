import { useSelector, useDispatch, shallowEqual as shallow } from 'react-redux'
import { select, dispatcher, useDidUpdate } from '../helpers/hooks'
import { TAct, Acts, ProcessState } from '../types'
import { processStop, processReset } from './actions'

import {
  getProcess,
  getProcessResponse,
  isProcessRunning,
  isProcessSucceed,
  isProcessFailed,
} from './selectors'

// dispatchers hooks

// stop process hooks
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
export const useGenerateStop = stop(Acts.Generate)
export const useSubmitStop = stop(Acts.Submit)
export const useValidateStop = stop(Acts.Validate)

// reset process hooks
export const useProcessReset = (itemType: string, act: TAct) =>
  dispatcher(
    useDispatch(),
    (itemType: string) => processReset(itemType, act),
    itemType
  )

const reset = (act: TAct) => (itemType: string) =>
  useProcessReset(itemType, act)

export const useLoadReset = reset(Acts.Load)
export const useAddReset = reset(Acts.Add)
export const useUpdateReset = reset(Acts.Update)
export const useDeleteReset = reset(Acts.Delete)
export const useImportReset = reset(Acts.Import)
export const useExportReset = reset(Acts.Export)
export const useGenerateReset = reset(Acts.Generate)
export const useSubmitReset = reset(Acts.Submit)
export const useValidateReset = reset(Acts.Validate)

// selector hooks

export const useProcess = (itemType: string, act: TAct): ProcessState =>
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
export const useGenerating = isRunning(Acts.Generate)
export const useSubmitting = isRunning(Acts.Submit)
export const useValidating = isRunning(Acts.Validate)

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
export const useGenerateSucceed = isSucceed(Acts.Generate)
export const useSubmitSucceed = isSucceed(Acts.Submit)
export const useValidateSucceed = isSucceed(Acts.Validate)

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
export const useGenerateFailed = isFailed(Acts.Generate)
export const useSubmitFailed = isFailed(Acts.Submit)
export const useValidateFailed = isFailed(Acts.Validate)
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
export const useOnGenerateSuccess = onSuccess(Acts.Generate)
export const useOnSubmitSuccess = onSuccess(Acts.Submit)
export const useOnValidateSuccess = onSuccess(Acts.Validate)

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
export const useOnGenerateFail = onFail(Acts.Generate)
export const useOnSubmitFail = onFail(Acts.Submit)
export const useOnValidateFail = onFail(Acts.Validate)
