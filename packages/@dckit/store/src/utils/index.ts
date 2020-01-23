interface AnyObject {
  [key: string]: any
}

// lodash _.get replacement for objects only
export const _get = (obj: AnyObject, path: string, defaultValue?: any): any => {
  if (!obj || !path) return defaultValue

  const parts = String(path).split('.')

  if (parts.length === 1) {
    let value
    try {
      value = obj[parts[0]]
    } catch (e) {
      return defaultValue
    }
    return value
  }

  return parts.reduce((acc, v) => {
    try {
      acc = acc[v]
    } catch (e) {
      return defaultValue
    }
    return acc
  }, obj)
}
