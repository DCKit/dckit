import { haveUnsavedData, setProxyHandler } from 'utils'
import { useSetOpenUnsavedDialog } from './constateUnsavedDialog'

export function useProxyHandler(handler: any) {
  const setOpenUnsavedDialog = useSetOpenUnsavedDialog()

  const proxyHandler = (...args: any[]) => {
    if (haveUnsavedData()) {
      setProxyHandler(handler, args)
      setOpenUnsavedDialog(true)
    } else {
      handler && handler(...args)
    }
  }
  return proxyHandler
}
