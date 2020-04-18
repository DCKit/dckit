import { useDispatch } from 'react-redux'
import { dispatcher } from '../helpers/hooks'
import * as acts from './actions'

// dispatchers hooks

export type TActDispatcher = (options?: any) => any

export const useLoadDispatcher = (itemType: string): TActDispatcher =>
  dispatcher(useDispatch(), acts.loadItems, itemType)

export const useAddDispatcher = (itemType: string): TActDispatcher =>
  dispatcher(useDispatch(), acts.addItem, itemType)

export const useUpdateDispatcher = (itemType: string): TActDispatcher =>
  dispatcher(useDispatch(), acts.updateItem, itemType)

export const useDeleteDispatcher = (itemType: string): TActDispatcher =>
  dispatcher(useDispatch(), acts.deleteItem, itemType)

export const useImportDispatcher = (itemType: string): TActDispatcher =>
  dispatcher(useDispatch(), acts.importItems, itemType)

export const useExportDispatcher = (itemType: string): TActDispatcher =>
  dispatcher(useDispatch(), acts.exportItems, itemType)

export const useGenerateDispatcher = (itemType: string): TActDispatcher =>
  dispatcher(useDispatch(), acts.generateItems, itemType)

export const useSubmitDispatcher = (itemType: string): TActDispatcher =>
  dispatcher(useDispatch(), acts.submitItems, itemType)

export const useValidateDispatcher = (itemType: string): TActDispatcher =>
  dispatcher(useDispatch(), acts.validateItems, itemType)
