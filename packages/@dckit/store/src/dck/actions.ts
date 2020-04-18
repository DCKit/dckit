import {
  setItems,
  setItem,
  removeItem,
  optItem,
  selectItem,
} from '../items/actions'

import {
  loadItems,
  addItem,
  updateItem,
  deleteItem,
  importItems,
  exportItems,
  generateItems,
  submitItems,
  validateItems,
} from '../acts/actions'

import {
  setItemProp,
  setTotalItems,
  setTotalPages,
  setCurrentPage,
  setPageSize,
} from '../itemProps/actions'

import { setFilters, setFilter, removeFilter } from '../filters/actions'

import {
  setSortFields,
  setSortField,
  removeSortField,
} from '../sorting/actions'

import {
  processStart,
  processStop,
  processFail,
  processReset,
} from '../processes/actions'

export const dckActions = {
  setItems,
  setItem,
  removeItem,
  optItem,
  selectItem,
  loadItems,
  addItem,
  updateItem,
  deleteItem,
  importItems,
  exportItems,
  generateItems,
  submitItems,
  validateItems,
  setItemProp,
  setTotalItems,
  setTotalPages,
  setCurrentPage,
  setPageSize,
  setFilters,
  setFilter,
  removeFilter,
  setSortFields,
  setSortField,
  removeSortField,
  processStart,
  processStop,
  processFail,
  processReset,
}
