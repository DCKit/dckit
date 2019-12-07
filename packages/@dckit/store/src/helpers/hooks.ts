export const select = (selector: any, ...args: any[]) => (state: any) =>
  selector(state, ...args)

export const dispatcher = (
  dispatch: any,
  actionCreator: any,
  itemType: string
) => (...args: any[]) => dispatch(actionCreator(itemType, ...args))
