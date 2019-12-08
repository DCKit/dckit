import React from 'react'
import { useMediaQuery } from '@material-ui/core'
import { TRenderProp } from '../types'

export const renderEmpty: TRenderProp = (): JSX.Element => <></>

export const useMobile = (): boolean => useMediaQuery('(min-width:481)')
