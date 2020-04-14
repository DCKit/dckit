import { useDispatch } from 'react-redux'
import { dispatcher } from '../helpers/hooks'

import {
  loadItems,
  addItem,
  updateItem,
  deleteItem,
  importItems,
  exportItems,
} from './actions'

// dispatchers hooks

export type TLoadDispatcher = (options?: any) => any
export const useLoadDispatcher = (itemType: string): TLoadDispatcher =>
  dispatcher(useDispatch(), loadItems, itemType)

export type TAddDispatcher = (options?: any) => any
export const useAddDispatcher = (itemType: string): TAddDispatcher =>
  dispatcher(useDispatch(), addItem, itemType)

export type TUpdateDispatcher = (options?: any) => any
export const useUpdateDispatcher = (itemType: string): TUpdateDispatcher =>
  dispatcher(useDispatch(), updateItem, itemType)

export type TDeleteDispatcher = (options?: any) => any
export const useDeleteDispatcher = (itemType: string): TDeleteDispatcher =>
  dispatcher(useDispatch(), deleteItem, itemType)

export type TImportDispatcher = (options?: any) => any
export const useImportDispatcher = (itemType: string): TImportDispatcher =>
  dispatcher(useDispatch(), importItems, itemType)

export type TExportDispatcher = (options?: any) => any
export const useExportDispatcher = (itemType: string): TExportDispatcher =>
  dispatcher(useDispatch(), exportItems, itemType)
