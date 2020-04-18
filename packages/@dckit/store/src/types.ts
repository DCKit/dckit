export type TFetcher = (request: any) => any

export type TState = {
  [propName: string]: any
}

export type TAction = {
  type: ActionTypes
  meta: {
    itemType: string
    id: string | number
    field: string
    options?: any
  }
  payload: any
}

export type ProcessState = {
  running: boolean
  error: boolean
  finished: boolean
  response?: any
}

export enum ActionTypes {
  // for items with reducers
  setItems = 'dck/setItems',
  setItem = 'dck/setItem',
  removeItem = 'dck/removeItem',
  // for items with reducers and acts
  optItem = 'dck/optItem',
  selectItem = 'dck/selectItem',
  // for items with acts
  loadItems = 'dck/loadItems',
  addItem = 'dck/addItem',
  updateItem = 'dck/updateItem',
  deleteItem = 'dck/deleteItem',
  importItems = 'dck/importItems',
  exportItems = 'dck/exportItems',
  validateItems = 'dck/validateItems',
  generateItems = 'dck/generateItems',
  submitItems = 'dck/submitItems',
  transformItems = 'dck/transformItems',
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
  processReset = 'dck/processReset',
}

export enum PaginationProps {
  totalItems = 'totalItems',
  totalPages = 'totalPages',
  currentPage = 'currentPage',
  pageSize = 'pageSize',
}

export enum Acts {
  Opt = 'Opt',
  Select = 'Select',
  Load = 'Load',
  Add = 'Add',
  Update = 'Update',
  Delete = 'Delete',
  Import = 'Import',
  Export = 'Export',
  Generate = 'Generate',
  Submit = 'Submit',
  Validate = 'Validate',
}

export type TAct = Acts | string
