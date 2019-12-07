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

export type TLoadItems = (options?: any) => any
export const useLoadItems = (itemType: string): TLoadItems =>
  dispatcher(useDispatch(), loadItems, itemType)

export type TAddItem = (options?: any) => any
export const useAddItem = (itemType: string): TAddItem =>
  dispatcher(useDispatch(), addItem, itemType)

export type TUpdateItem = (options?: any) => any
export const useUpdateItem = (itemType: string): TUpdateItem =>
  dispatcher(useDispatch(), updateItem, itemType)

export type TDeleteItem = (options?: any) => any
export const useDeleteItem = (itemType: string): TDeleteItem =>
  dispatcher(useDispatch(), deleteItem, itemType)

export type TImportItems = (options?: any) => any
export const useImportItems = (itemType: string): TImportItems =>
  dispatcher(useDispatch(), importItems, itemType)

export type TExportItems = (options?: any) => any
export const useExportItems = (itemType: string): TExportItems =>
  dispatcher(useDispatch(), exportItems, itemType)
