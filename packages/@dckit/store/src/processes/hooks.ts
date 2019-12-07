import { useSelector, shallowEqual as shallow } from 'react-redux'
import { select } from '../helpers/hooks'
import { TAct, Acts, IProcess } from '../types'

import {
  getProcess,
  getProcessResponse,
  isProcessRunning,
  isProcessFailed,
} from './selectors'

// selectors hooks

export const useProcess = (itemType: string, act: TAct): IProcess =>
  useSelector(select(getProcess, itemType, act), shallow)

export const useResponse = (itemType: string, act: TAct): any =>
  useSelector(select(getProcessResponse, itemType, act), shallow)

export const useLoading = (itemType: string): boolean =>
  useSelector(select(isProcessRunning, itemType, Acts.Load), shallow)

export const useAdding = (itemType: string): boolean =>
  useSelector(select(isProcessRunning, itemType, Acts.Add), shallow)

export const useUpdating = (itemType: string): boolean =>
  useSelector(select(isProcessRunning, itemType, Acts.Update), shallow)

export const useDeleting = (itemType: string): boolean =>
  useSelector(select(isProcessRunning, itemType, Acts.Delete), shallow)

export const useImporting = (itemType: string): boolean =>
  useSelector(select(isProcessRunning, itemType, Acts.Import), shallow)

export const useExporting = (itemType: string): boolean =>
  useSelector(select(isProcessRunning, itemType, Acts.Export), shallow)

export const useLoadFailed = (itemType: string): boolean =>
  useSelector(select(isProcessFailed, itemType, Acts.Load), shallow)

export const useAddFailed = (itemType: string): boolean =>
  useSelector(select(isProcessFailed, itemType, Acts.Add), shallow)

export const useUpdateFailed = (itemType: string): boolean =>
  useSelector(select(isProcessFailed, itemType, Acts.Update), shallow)

export const useDeleteFailed = (itemType: string): boolean =>
  useSelector(select(isProcessFailed, itemType, Acts.Delete), shallow)

export const useImportFailed = (itemType: string): boolean =>
  useSelector(select(isProcessFailed, itemType, Acts.Import), shallow)

export const useExportFailed = (itemType: string): boolean =>
  useSelector(select(isProcessFailed, itemType, Acts.Export), shallow)
