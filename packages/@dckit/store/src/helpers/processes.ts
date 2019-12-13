import { call, put, select, PutEffect, SelectEffect } from 'redux-saga/effects'
import { Acts, TAct, TFetcher, IAction, ItemProps } from '../types'
import * as dckActions from '../dck/actions'
import * as dckSelectors from '../dck/selectors'

export interface TProcess {
  fetch(params?: any): any
  getData(): any
  getResponse(): any
  filters(): SelectEffect
  sorting(): SelectEffect
  currentPage(): SelectEffect
  pageSize(): SelectEffect
  totalItems(): SelectEffect
  totalPages(): SelectEffect
  itemProp(prop: any): SelectEffect
  start(): PutEffect<IAction>
  reset(): PutEffect<IAction>
  stop(response?: any): PutEffect<IAction>
  fail(response?: any): PutEffect<IAction>
  optItem(id: string | number): PutEffect<IAction>
  setItemProp(prop: string, data: any): PutEffect<IAction>
  setCurrentPage(currentPage: number): PutEffect<IAction>
  setPageSize(pageSize: number): PutEffect<IAction>
  setItems(data?: any[]): PutEffect<IAction>
  setItem(id: string | number, data: any): PutEffect<IAction>
  setTotalItems(totalItems: number): PutEffect<IAction>
  setTotalPages(totalPages: number): any
}

// static hook to extend request params before fetch, for ex. session token
let processExtendRequest: any
export const setProcessExtendRequest = (extendRequest: any) =>
  (processExtendRequest = extendRequest)

// default static fetcher to fetch data, if there is no fetcher in options
let processFetcher: TFetcher | undefined
export const setProcessFetcher = (fetcher: TFetcher) =>
  (processFetcher = fetcher)

export function createProcess(
  procAct: TAct,
  procItemType: string,
  procOptions?: any
): TProcess {
  let act = procAct
  let itemType = procItemType
  let options = procOptions || {}
  let procResponse: any
  let procData: any

  return Object.freeze({
    fetch,
    getData,
    getResponse,
    filters,
    sorting,
    currentPage,
    pageSize,
    totalItems,
    totalPages,
    itemProp,
    start,
    reset,
    stop,
    fail,
    optItem,
    setItemProp,
    setCurrentPage,
    setPageSize,
    setItems,
    setItem,
    setTotalItems,
    setTotalPages,
  })

  //// methods

  function getData() {
    return procData
  }
  function getResponse() {
    return procResponse
  }

  function* createRequest(params?: any): any {
    let request: any = { params }
    request.itemType = itemType
    request.act = act

    if (options.pageble) {
      const pageble: any = {}
      pageble[ItemProps.currentPage] = yield currentPage()
      pageble[ItemProps.pageSize] = yield pageSize()
      pageble.filters = yield filters()
      pageble.sorting = yield sorting()
      request.pageble = pageble
    }

    if (processExtendRequest && typeof processExtendRequest === 'function') {
      request = yield processExtendRequest(request)
    }
    return request
  }

  function* fetch(params?: any): any {
    const request = yield createRequest(params)
    const fetcher = processFetcher || options.fetcher
    if (fetcher) {
      const response = yield call(fetcher, request)
      return yield postFetch(response)
    }
    return yield void 0
  }

  function* postFetch(fetcherResponse: any): any {
    if (!fetcherResponse) return yield void 0

    const responseData = fetcherResponse.data
    const totalItems = fetcherResponse.totalItems
    const totalPages = fetcherResponse.totalPages

    procResponse = fetcherResponse
    if (responseData !== void 0) procData = responseData
    if (totalItems !== void 0) yield setTotalItems(totalItems)
    if (totalPages !== void 0) yield setTotalPages(totalPages)
    return yield procResponse
  }

  // selectors helpers

  function filters(): SelectEffect {
    return select(state => dckSelectors.getFilters(state, itemType))
  }

  function sorting(): SelectEffect {
    return select(state => dckSelectors.getSortFields(state, itemType))
  }

  function currentPage(): SelectEffect {
    return select(state => dckSelectors.getCurrentPage(state, itemType))
  }

  function pageSize(): SelectEffect {
    return select(state => dckSelectors.getPageSize(state, itemType))
  }

  function totalItems(): SelectEffect {
    return select(state => dckSelectors.getTotalItems(state, itemType))
  }

  function totalPages(): SelectEffect {
    return select(state => dckSelectors.getTotalPages(state, itemType))
  }

  function itemProp(prop: any): SelectEffect {
    return select(state => dckSelectors.getItemProp(state, itemType, prop))
  }

  // actions helpers
  function start(): PutEffect<IAction> {
    return put(dckActions.processStart(itemType, act))
  }

  function reset(): PutEffect<IAction> {
    return put(dckActions.processReset(itemType, act))
  }

  function stop(response?: any): PutEffect<IAction> {
    return put(dckActions.processStop(itemType, act, response))
  }

  function fail(response?: any): PutEffect<IAction> {
    if (response instanceof Error) response = { message: response.message }
    return put(dckActions.processFail(itemType, act, response))
  }

  function optItem(id: string | number): PutEffect<IAction> {
    return put(dckActions.optItem(itemType, id))
  }

  function setItemProp(prop: string, data: any): PutEffect<IAction> {
    return put(dckActions.setItemProp(itemType, prop, data))
  }

  function setCurrentPage(currentPage: number): PutEffect<IAction> {
    return put(dckActions.setCurrentPage(itemType, currentPage))
  }

  function setPageSize(pageSize: number): PutEffect<IAction> {
    return put(dckActions.setPageSize(itemType, pageSize))
  }

  function setItems(data?: any[]): PutEffect<IAction> {
    if (!data) data = []
    return put(dckActions.setItems(itemType, data))
  }

  function setItem(id: string | number, data: any): PutEffect<IAction> {
    return put(dckActions.setItem(itemType, id, data))
  }

  function setTotalItems(totalItems: number): PutEffect<IAction> {
    return put(dckActions.setTotalItems(itemType, totalItems))
  }

  function* setTotalPages(totalPages: number): any {
    // set current page to last page if current page is greater than total pages
    const curPage: number = (yield currentPage()) || 0
    let page: number = totalPages > 0 ? curPage : 0
    if (page >= totalPages) page = totalPages - 1
    if (page !== curPage) {
      yield put(dckActions.setCurrentPage(itemType, page))
    }
    yield put(dckActions.setTotalPages(itemType, totalPages))
  }
}

export function createProcessLoad(
  procItemType: string,
  procOptions?: any
): TProcess {
  return createProcess(Acts.Load, procItemType, procOptions)
}

export function createProcessAdd(
  procItemType: string,
  procOptions?: any
): TProcess {
  return createProcess(Acts.Add, procItemType, procOptions)
}

export function createProcessUpdate(
  procItemType: string,
  procOptions?: any
): TProcess {
  return createProcess(Acts.Update, procItemType, procOptions)
}

export function createProcessDelete(
  procItemType: string,
  procOptions?: any
): TProcess {
  return createProcess(Acts.Delete, procItemType, procOptions)
}

export function createProcessImport(
  procItemType: string,
  procOptions?: any
): TProcess {
  return createProcess(Acts.Import, procItemType, procOptions)
}

export function createProcessExport(
  procItemType: string,
  procOptions?: any
): TProcess {
  return createProcess(Acts.Export, procItemType, procOptions)
}
