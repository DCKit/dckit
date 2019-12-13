import { call, put, select, PutEffect, SelectEffect } from 'redux-saga/effects'
import { Acts, TAct, TFetcher, IAction, ItemProps } from '../types'
import * as dckActions from '../dck/actions'
import * as dckSelectors from '../dck/selectors'

export interface TProcess {
  fetch(params?: any): any
  data(): any
  response(): any
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

export const Process = Object.freeze({
  create: createProcess,
  setExtendRequest,
  setFetcher,
  [Acts.Load]: createProcess(Acts.Load),
  [Acts.Add]: createProcess(Acts.Add),
  [Acts.Update]: createProcess(Acts.Update),
  [Acts.Delete]: createProcess(Acts.Delete),
  [Acts.Import]: createProcess(Acts.Import),
  [Acts.Export]: createProcess(Acts.Export),
})

// static hook to extend request params before fetch, for ex. session token
let processExtendRequest: any
function setExtendRequest(extendRequest: any) {
  processExtendRequest = extendRequest
}

// default static fetcher to fetch data, if there is no fetcher in _options
let processFetcher: TFetcher | undefined
function setFetcher(fetcher: TFetcher) {
  processFetcher = fetcher
}

export function createProcess(act: TAct) {
  return function(itemType: string, options?: any): TProcess {
    let _act = act
    let _itemType = itemType
    let _options = options || {}
    let _response: any
    let _data: any

    return Object.freeze({
      fetch,
      data,
      response,
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

    // methods

    function data() {
      return _data
    }
    function response() {
      return _response
    }

    function* createRequest(params?: any): any {
      let request: any = { params }
      request.itemType = _itemType
      request.act = _act

      if (_options.pageble) {
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
      const fetcher = processFetcher || _options.fetcher
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

      _response = fetcherResponse
      if (responseData !== void 0) _data = responseData
      if (totalItems !== void 0) yield setTotalItems(totalItems)
      if (totalPages !== void 0) yield setTotalPages(totalPages)
      return yield _response
    }

    // selectors helpers

    function filters(): SelectEffect {
      return select(state => dckSelectors.getFilters(state, _itemType))
    }

    function sorting(): SelectEffect {
      return select(state => dckSelectors.getSortFields(state, _itemType))
    }

    function currentPage(): SelectEffect {
      return select(state => dckSelectors.getCurrentPage(state, _itemType))
    }

    function pageSize(): SelectEffect {
      return select(state => dckSelectors.getPageSize(state, _itemType))
    }

    function totalItems(): SelectEffect {
      return select(state => dckSelectors.getTotalItems(state, _itemType))
    }

    function totalPages(): SelectEffect {
      return select(state => dckSelectors.getTotalPages(state, _itemType))
    }

    function itemProp(prop: any): SelectEffect {
      return select(state => dckSelectors.getItemProp(state, _itemType, prop))
    }

    // actions helpers

    function start(): PutEffect<IAction> {
      return put(dckActions.processStart(_itemType, _act))
    }

    function reset(): PutEffect<IAction> {
      return put(dckActions.processReset(_itemType, _act))
    }

    function stop(response?: any): PutEffect<IAction> {
      return put(dckActions.processStop(_itemType, _act, response))
    }

    function fail(response?: any): PutEffect<IAction> {
      if (response instanceof Error) response = { message: response.message }
      return put(dckActions.processFail(_itemType, _act, response))
    }

    function optItem(id: string | number): PutEffect<IAction> {
      return put(dckActions.optItem(_itemType, id))
    }

    function setItemProp(prop: string, data: any): PutEffect<IAction> {
      return put(dckActions.setItemProp(_itemType, prop, data))
    }

    function setCurrentPage(currentPage: number): PutEffect<IAction> {
      return put(dckActions.setCurrentPage(_itemType, currentPage))
    }

    function setPageSize(pageSize: number): PutEffect<IAction> {
      return put(dckActions.setPageSize(_itemType, pageSize))
    }

    function setItems(data?: any[]): PutEffect<IAction> {
      if (!data) data = []
      return put(dckActions.setItems(_itemType, data))
    }

    function setItem(id: string | number, data: any): PutEffect<IAction> {
      return put(dckActions.setItem(_itemType, id, data))
    }

    function setTotalItems(totalItems: number): PutEffect<IAction> {
      return put(dckActions.setTotalItems(_itemType, totalItems))
    }

    // set current page to last page if current page is greater than total pages
    function* setTotalPages(totalPages: number): any {
      const curPage: number = (yield currentPage()) || 0
      let page: number = totalPages > 0 ? curPage : 0
      if (page >= totalPages) page = totalPages - 1
      if (page !== curPage) {
        yield put(dckActions.setCurrentPage(_itemType, page))
      }
      yield put(dckActions.setTotalPages(_itemType, totalPages))
    }
  }
}
