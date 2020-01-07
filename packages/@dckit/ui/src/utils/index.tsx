import { useMediaQuery } from '@material-ui/core'

export const stub = () => null

export const normalizePath = (path?: string) =>
  !path || path === '/' ? '' : path

const query = (max: number): string => `@media (max-width: ${max}px)`

export const useMediaMobile = (): boolean =>
  useMediaQuery(query(576), { noSsr: true })

export const useMediaTablet = (): boolean =>
  useMediaQuery(query(768), { noSsr: true })

export const useMediaDesktop = (): boolean =>
  useMediaQuery(query(922), { noSsr: true })
