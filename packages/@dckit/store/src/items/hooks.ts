import { useSelector, useDispatch, shallowEqual as shallow } from 'react-redux'
import { select, dispatcher } from '../helpers/hooks'

import {
  getItems,
  getItem,
  getOptedItem,
  getOptedItemId,
  isItemSelected,
  getSelectedItemIds,
  getSelectedItems,
} from './selectors'

import { setItems, setItem, removeItem, optItem, selectItem } from './actions'

// selectors hooks

export const useItems = (itemType: string): any[] =>
  useSelector(select(getItems, itemType), shallow)

export const useItem = (itemType: string, id: string | number): any[] =>
  useSelector(select(getItem, itemType, id), shallow)

export const useOptedItem = (itemType: string): any =>
  useSelector(select(getOptedItem, itemType), shallow)

export const useOptedItemId = (itemType: string): string | number =>
  useSelector(select(getOptedItemId, itemType), shallow)

export const useItemSelected = (
  itemType: string,
  id: string | number
): boolean => useSelector(select(isItemSelected, itemType, id), shallow)

export const useSelectedItems = (itemType: string): any[] =>
  useSelector(select(getSelectedItems, itemType), shallow)

export const useSelectedItemsIds = (itemType: string): any[] =>
  useSelector(select(getSelectedItemIds, itemType), shallow)

// dispatchers hooks

export type TSetDispatcher = (items: any[]) => any
export const useSetDispatcher = (itemType: string): TSetDispatcher =>
  dispatcher(useDispatch(), setItems, itemType)

export type TSetOneDispatcher = (id: string | number, item: any) => any
export const useSetOneDispatcher = (itemType: string): TSetOneDispatcher =>
  dispatcher(useDispatch(), setItem, itemType)

export type TRemoveOneDispatcher = (id: string | number) => any
export const useRemoveOneDispatcher = (
  itemType: string
): TRemoveOneDispatcher => dispatcher(useDispatch(), removeItem, itemType)

export type TOptDispatcher = (id: string | number | undefined) => any
export const useOptDispatcher = (itemType: string): TOptDispatcher =>
  dispatcher(useDispatch(), optItem, itemType)

export type TOptOutDispatcher = () => any
export const useOptOutDispatcher = (itemType: string): TOptOutDispatcher =>
  dispatcher(useDispatch(), optItem, itemType)

export type TSelectDispatcher = (id: string | number, selected: boolean) => any
export const useSelectDispatcher = (itemType: string): TSelectDispatcher =>
  dispatcher(useDispatch(), selectItem, itemType)
