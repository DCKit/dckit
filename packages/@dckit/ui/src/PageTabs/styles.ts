import { Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

export const useTabsStyles = makeStyles(() => ({
  root: {
    width: '100%',
    minHeight: 24,
    marginBottom: 32,
  },
  indicator: {
    backgroundColor: '#1da1f2',
  },
}))

export const useTabItemStyles = makeStyles(
  ({ breakpoints }: Pick<Theme, 'breakpoints'>) => ({
    root: {
      minHeight: 30,
      minWidth: 80,
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.04)',
        '&$selected': {
          backgroundColor: 'rgba(0, 0, 0, 0.07)',
          '& *': {
            color: '#555',
          },
        },
        '& $wrapper': {
          color: '#0288d1',
        },
      },
      '&$selected': {
        backgroundColor: 'rgba(0, 180, 250, 0.1)',
        '& *': {
          color: '#555',
        },
      },
    },
    selected: {},
    textColorInherit: {
      opacity: 1,
    },
    wrapper: {
      minHeight: 30,
      textTransform: 'none',
      fontSize: '0.86rem',
      fontWeight: 400,
      color: '#0288d1',
    },
  })
)
