import React from 'react'
import { useMediaQuery } from '@material-ui/core'
import { TRenderProp } from '../types'

export const renderEmpty: TRenderProp = (): JSX.Element => <></>
export const identity = () => {}

export interface IMediaType {
  isDesktop: boolean
  isTablet: boolean
  isMobile: boolean
}

const query = (max: number): string => `@media (max-width: ${max}px)`

export const useMediaType = (): IMediaType => {
  const isDesktop = useMediaQuery(query(922))
  const isTablet = useMediaQuery(query(768))
  const isMobile = useMediaQuery(query(576))
  return {
    isDesktop,
    isTablet,
    isMobile,
  }
}
