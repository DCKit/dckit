import { useRef, useEffect } from 'react'
export const select = (selector: any, ...args: any[]) => (state: any) =>
  selector(state, ...args)

export const dispatcher = (
  dispatch: any,
  actionCreator: any,
  itemType: string
) => (...args: any[]) => dispatch(actionCreator(itemType, ...args))

export const useDidUpdate = (
  callback: any,
  deps: any[],
  condition: boolean = true
) => {
  const hasMount = useRef(false)

  useEffect(() => {
    if (hasMount.current) {
      callback && condition && callback()
    } else {
      hasMount.current = true
    }
  }, deps) // eslint-disable-line react-hooks/exhaustive-deps
}
