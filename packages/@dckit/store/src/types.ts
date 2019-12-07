export type TFetcher = (request: any) => any

export interface IState {
  [propName: string]: any
}

export interface IAction {
  type: string
  meta: {
    itemType: string
    id: string | number
    field: string
    options?: any
  }
  payload: any
}

export interface IProcess {
  running: boolean
  error: boolean
  finished: boolean
  response?: any
}

export enum ActionTypes {
  // items
  setItems = 'dck/setItems',
  setItem = 'dck/setItem',
  removeItem = 'dck/removeItem',
  optItem = 'dck/optItem',
  selectItem = 'dck/selectItem',
  // crud items
  loadItems = 'dck/loadItems',
  addItem = 'dck/addItem',
  updateItem = 'dck/updateItem',
  deleteItem = 'dck/deleteItem',
  importItems = 'dck/importItems',
  exportItems = 'dck/exportItems',
  // itemProps
  setItemProp = 'dck/setItemProp',
  // filters
  setFilters = 'dck/setFilters',
  setFilter = 'dck/setFilter',
  removeFilter = 'dck/removeFilter',
  // sorting
  setSortFields = 'dck/setSortFields',
  setSortField = 'dck/setSortField',
  removeSortField = 'dck/removeSortField',
  // processes
  processStart = 'dck/processStart',
  processStop = 'dck/processStop',
  processFail = 'dck/processFail',
  processReset = 'dck/processRestart',
}

export enum ItemProps {
  totalItems = 'totalItems',
  totalPages = 'totalPages',
  currentPage = 'currentPage',
  pageSize = 'pageSize',
}

export enum Acts {
  Load = 'Load',
  Add = 'Add',
  Update = 'Update',
  Delete = 'Delete',
  Import = 'Import',
  Export = 'Export',
  Opt = 'Opt',
  Select = 'Select',
}

export type TAct = Acts | string
