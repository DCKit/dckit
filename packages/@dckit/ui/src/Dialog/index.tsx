import { Dialog as MuiDialog } from '@material-ui/core'
import { DialogTitle } from './DialogTitle'
import { useStyles } from './styles'

export function Dialog(props: any) {
  const {
    open,
    onClose,
    title = '',
    titleStyle,
    style,
    children,
    ...other
  } = props

  const cls = useStyles()

  return (
    <MuiDialog
      open={open}
      onClose={onClose}
      classes={{ paper: cls.paper }}
      fullWidth={true}
      disableBackdropClick={true}
      disableRestoreFocus={true}
      transitionDuration={1}
      BackdropProps={{
        style: { backgroundColor: 'rgba(0, 0, 0, 0.1)' },
      }}
      {...other}
    >
      <DialogTitle onClose={onClose} titleStyle={titleStyle}>
        {title}
      </DialogTitle>
      {children}
    </MuiDialog>
  )
}
