import { Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) => {
  return {
    helperText: {
      position: 'absolute',
      top: 48,
      lineHeight: '1.2em',
    },
    helperTextOutlined: {
      position: 'absolute',
      top: 40,
      lineHeight: '1.2em',
    },
  }
})
