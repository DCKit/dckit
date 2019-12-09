import React from 'react'
import { useMediaQuery } from '@material-ui/core'
import { TRenderProp } from '../types'

export const renderEmpty: TRenderProp = (): JSX.Element => <></>

export interface IMediaType {
  isDesktop: boolean
  isTablet: boolean
  isMobile: boolean
}

const query = (max: number): boolean =>
  useMediaQuery(`@media (max-width: ${max}px)`)

export const useMediaType = (): IMediaType => ({
  isDesktop: query(922),
  isTablet: query(768),
  isMobile: query(576),
})
