import { Dialog, CTAButton } from 'ui'

import {
  useOpenUnsavedDialog,
  useSetOpenUnsavedDialog,
} from './constateUnsavedDialog'

import { getProxyHandler, resetProxyHandler } from 'utils'

export function UnsavedDialogGlobal(props: any) {
  const setOpenUnsavedDialog = useSetOpenUnsavedDialog()

  const handleCancel = () => {
    resetProxyHandler()
    setOpenUnsavedDialog(false)
  }

  const handleLeave = () => {
    const { handler, args } = getProxyHandler()
    handleCancel()
    handler && handler(...args)
  }

  return <UnsavedDialog handleCancel={handleCancel} handleLeave={handleLeave} />
}

function UnsavedDialog(props: any) {
  const open = useOpenUnsavedDialog()

  const { handleCancel, handleLeave } = props

  return (
    <Dialog
      open={open}
      maxWidth="xs"
      onClose={handleCancel}
      title="LEAVE PAGE ?"
    >
      <div style={{ width: '100%', padding: 24 }}>
        <span>Changes that you made may not be saved</span>
        <div
          style={{
            width: '100%',
            marginTop: 24,
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <CTAButton
            color="default"
            style={{ marginRight: 24 }}
            onClick={handleCancel}
          >
            Cancel
          </CTAButton>
          <CTAButton color="primary" onClick={handleLeave}>
            Leave
          </CTAButton>
        </div>
      </div>
    </Dialog>
  )
}
