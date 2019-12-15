import {
  getItems,
  getItem,
  getOptedItemId,
  getOptedItem,
  isItemSelected,
  getSelectedItemIds,
  getSelectedItems,
} from '../items/selectors'

import {
  getItemProp,
  getTotalItems,
  getTotalPages,
  getCurrentPage,
  getPageSize,
} from '../itemProps/selectors'

import { getFilters, getFilter } from '../filters/selectors'

import { getSortFields, getSortField } from '../sorting/selectors'

import {
  getProcess,
  isProcessRunning,
  isProcessFinished,
  isProcessSucceed,
  isProcessFailed,
  getProcessResponse,
} from '../processes/selectors'

export const dckSelectors = {
  getItems,
  getItem,
  getOptedItemId,
  getOptedItem,
  isItemSelected,
  getSelectedItemIds,
  getSelectedItems,
  getItemProp,
  getTotalItems,
  getTotalPages,
  getCurrentPage,
  getPageSize,
  getFilters,
  getFilter,
  getSortFields,
  getSortField,
  getProcess,
  isProcessRunning,
  isProcessFinished,
  isProcessSucceed,
  isProcessFailed,
  getProcessResponse,
}
