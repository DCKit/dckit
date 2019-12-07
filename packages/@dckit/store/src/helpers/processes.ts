import { call, put, select, PutEffect, SelectEffect } from 'redux-saga/effects'
import { Acts, TAct, TFetcher, IAction, ItemProps } from '../types'
import * as dckActions from '../dck/actions'
import * as dckSelectors from '../dck/selectors'

export type TProcess = typeof Process
export type TProcessLoad = typeof ProcessLoad
export type TProcessAdd = typeof ProcessAdd
export type TProcessUpdate = typeof ProcessUpdate
export type TProcessDelete = typeof ProcessDelete
export type TProcessImport = typeof ProcessImport
export type TProcessExport = typeof ProcessExport

export class Process {
  public static [Acts.Load]: TProcessLoad
  public static [Acts.Add]: TProcessAdd
  public static [Acts.Update]: TProcessUpdate
  public static [Acts.Delete]: TProcessDelete
  public static [Acts.Import]: TProcessImport
  public static [Acts.Export]: TProcessExport

  // static hook to extend request params before fetch, for ex. session token
  public static extendRequest: any

  // default static fetcher to fetch data, if there is no fetcher in options
  public static fetcher: TFetcher | undefined

  public act: TAct
  public itemType: string
  public options: any
  public response: any
  public data: any

  constructor(act: TAct, itemType?: string, options?: any) {
    this.act = act
    this.itemType = itemType || '__internal__'
    this.options = options || {}
  }

  *createRequest(params?: any): any {
    let request: any = { params }
    request.itemType = this.itemType
    request.act = this.act

    if (this.options.pageble) {
      const pageble: any = {}
      pageble[ItemProps.currentPage] = yield this.currentPage()
      pageble[ItemProps.pageSize] = yield this.pageSize()
      pageble.filters = yield this.filters()
      pageble.sorting = yield this.sorting()
      request.pageble = pageble
    }

    if (Process.extendRequest && typeof Process.extendRequest === 'function') {
      request = yield Process.extendRequest(request)
    }
    return request
  }

  *fetch(params?: any): any {
    const request = yield this.createRequest(params)
    const fetcher = Process.fetcher || this.options.fetcher
    if (fetcher) {
      const response = yield call(fetcher, request)
      return yield this.postFetch(response)
    }
    return yield void 0
  }

  *postFetch(response: any): any {
    if (!response) return yield void 0

    const data = response.data
    const totalItems = response.totalItems
    const totalPages = response.totalPages

    this.response = response
    if (data !== void 0) this.data = data
    if (totalItems !== void 0) yield this.setTotalItems(totalItems)
    if (totalPages !== void 0) yield this.setTotalPages(totalPages)
    return yield response
  }

  // selectors helpers
  filters = (): SelectEffect =>
    select(state => dckSelectors.getFilters(state, this.itemType))

  sorting = (): SelectEffect =>
    select(state => dckSelectors.getSortFields(state, this.itemType))

  currentPage = (): SelectEffect =>
    select(state => dckSelectors.getCurrentPage(state, this.itemType))

  pageSize = (): SelectEffect =>
    select(state => dckSelectors.getPageSize(state, this.itemType))

  totalItems = (): SelectEffect =>
    select(state => dckSelectors.getTotalItems(state, this.itemType))

  totalPages = (): SelectEffect =>
    select(state => dckSelectors.getTotalPages(state, this.itemType))

  itemProp = (prop: any): SelectEffect =>
    select(state => dckSelectors.getItemProp(state, this.itemType, prop))

  // actions helpers
  start = (): PutEffect<IAction> =>
    put(dckActions.processStart(this.itemType, this.act))

  reset = (): PutEffect<IAction> =>
    put(dckActions.processReset(this.itemType, this.act))

  stop = (response?: any): PutEffect<IAction> =>
    put(dckActions.processStop(this.itemType, this.act, response))

  fail = (response?: any): PutEffect<IAction> => {
    if (response instanceof Error) response = { message: response.message }
    return put(dckActions.processFail(this.itemType, this.act, response))
  }

  optItem = (id: string | number): PutEffect<IAction> =>
    put(dckActions.optItem(this.itemType, id))

  setItemProp = (prop: string, data: any): PutEffect<IAction> =>
    put(dckActions.setItemProp(this.itemType, prop, data))

  setCurrentPage = (currentPage: number): PutEffect<IAction> =>
    put(dckActions.setCurrentPage(this.itemType, currentPage))

  setPageSize = (pageSize: number): PutEffect<IAction> =>
    put(dckActions.setPageSize(this.itemType, pageSize))

  setItems = (data?: any[]): PutEffect<IAction> => {
    if (!data) data = []
    return put(dckActions.setItems(this.itemType, data))
  }

  setItem = (id: string | number, data: any): PutEffect<IAction> => {
    return put(dckActions.setItem(this.itemType, id, data))
  }

  setTotalItems = (totalItems: number): PutEffect<IAction> =>
    put(dckActions.setTotalItems(this.itemType, totalItems));

  *setTotalPages(totalPages: number) {
    // set current page to last page if current page is greater than total pages
    const currentPage: number = (yield this.currentPage()) || 0
    let page: number = totalPages > 0 ? currentPage : 0
    if (page >= totalPages) page = totalPages - 1
    if (page !== currentPage) {
      yield put(dckActions.setCurrentPage(this.itemType, page))
    }
    yield put(dckActions.setTotalPages(this.itemType, totalPages))
  }
}

class ProcessLoad extends Process {
  constructor(itemType: string, options?: any) {
    super(Acts.Load, itemType, options)
  }
}

class ProcessAdd extends Process {
  constructor(itemType: string, options?: any) {
    super(Acts.Add, itemType, options)
  }
}

class ProcessUpdate extends Process {
  constructor(itemType: string, options?: any) {
    super(Acts.Update, itemType, options)
  }
}

class ProcessDelete extends Process {
  constructor(itemType: string, options?: any) {
    super(Acts.Delete, itemType, options)
  }
}

class ProcessImport extends Process {
  constructor(itemType: string, options?: any) {
    super(Acts.Import, itemType, options)
  }
}

class ProcessExport extends Process {
  constructor(itemType: string, options?: any) {
    super(Acts.Export, itemType, options)
  }
}

Process.Load = ProcessLoad
Process.Add = ProcessAdd
Process.Update = ProcessUpdate
Process.Delete = ProcessDelete
Process.Import = ProcessImport
Process.Export = ProcessExport
