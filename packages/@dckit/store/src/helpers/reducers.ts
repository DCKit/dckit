import { TState, TAction } from '../types'

export const isObject = (obj: any) =>
  Boolean(obj) && typeof obj === 'object' && obj.constructor === Object

export const getItemKey = (item: any) => {
  return (isObject(item) && (item.id || item.field)) || void 0
}

export const getItemIndex = (items: any[]): TState => {
  const itemIndex: any = {}

  if (Array.isArray(items)) {
    items.forEach((item, index) => {
      const key = getItemKey(item)
      if (key !== void 0) itemIndex[String(key)] = index
    })
  }
  return itemIndex
}

export const getParams = (state: TState, action: TAction): TState => {
  const { meta, payload } = action
  const { itemType, field, id } = meta
  const itemState = state[itemType] || {}
  return { itemType, field, id, data: payload, itemState }
}
