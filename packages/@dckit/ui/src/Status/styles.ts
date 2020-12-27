import { makeStyles } from '@material-ui/core/styles'

export const useDraftStyles = makeStyles(() => ({
  chip: {
    backgroundColor: '#e8e8e8',
  },
  dot: {
    color: '#888',
  },
  label: {
    color: '#777',
  },
}))

export const useLiveStyles = makeStyles(() => ({
  chip: {
    backgroundColor: '#ceecd0',
  },
  dot: {
    color: '#6eb17a',
  },
  label: {
    color: '#308447',
  },
}))

export const useTemplateStyles = makeStyles(() => ({
  chip: {
    backgroundColor: 'white',
  },
  dot: {
    color: '#aaa',
  },
  label: {
    color: '#888',
  },
}))
