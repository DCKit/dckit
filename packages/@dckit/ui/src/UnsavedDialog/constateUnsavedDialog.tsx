import * as React from 'react'
import constate from 'constate'

function useUnsavedDialogState() {
  const [openUnsavedDialog, setOpenUnsavedDialog] = React.useState(false)
  return { openUnsavedDialog, setOpenUnsavedDialog }
}

const [
  UnsavedDialogProvider,
  useOpenUnsavedDialog,
  useSetOpenUnsavedDialog,
] = constate(
  useUnsavedDialogState,
  (value) => value.openUnsavedDialog,
  (value) => value.setOpenUnsavedDialog
)

export { UnsavedDialogProvider, useOpenUnsavedDialog, useSetOpenUnsavedDialog }
