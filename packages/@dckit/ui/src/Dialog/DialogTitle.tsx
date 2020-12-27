import { DialogTitle as MuiDialogTitle, IconButton } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import { useStyles } from './styles'

export function DialogTitle(props: any) {
  const { children, onClose, titleStyle } = props
  const cls = useStyles()

  return (
    <MuiDialogTitle
      disableTypography={true}
      style={{ padding: '16px 12px 0 12px' }}
    >
      <span
        style={{
          textTransform: 'uppercase',
          fontWeight: 500,
          fontSize: 15,
          marginLeft: 12,
          color: '#888',
          cursor: 'default',
          ...titleStyle,
        }}
      >
        {children}
      </span>
      {onClose && (
        <IconButton className={cls.closeButton} onClick={onClose} size="small">
          <CloseIcon />
        </IconButton>
      )}
    </MuiDialogTitle>
  )
}
