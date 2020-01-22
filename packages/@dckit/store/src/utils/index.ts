export const _get = (obj: any, path: string, defaultValue?: any): any => {
  return String(path)
    .split('.')
    .reduce((acc, v) => {
      try {
        acc = acc[v]
      } catch (e) {
        return defaultValue
      }
      return acc
    }, obj)
}
