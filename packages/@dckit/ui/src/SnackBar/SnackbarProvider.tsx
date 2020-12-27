import * as React from 'react'
import { SnackbarProvider as NotistackProvider } from 'notistack'
import { Button } from '@material-ui/core'

export function SnackbarProvider(props: any) {
  const {
    children,
    anchorOrigin = {
      vertical: 'top',
      horizontal: 'right',
    },
    autoHideDuration = 5000,
  } = props

  const notistackRef = React.createRef<NotistackProvider>()
  const onClickDismiss = (key: React.ReactText) => () => {
    notistackRef?.current?.closeSnackbar(key)
  }
  return (
    <NotistackProvider
      ref={notistackRef}
      anchorOrigin={anchorOrigin}
      autoHideDuration={autoHideDuration}
      action={(key) => (
        <Button style={{ color: 'white' }} onClick={onClickDismiss(key)}>
          Dismiss
        </Button>
      )}
    >
      {children}
    </NotistackProvider>
  )
}
