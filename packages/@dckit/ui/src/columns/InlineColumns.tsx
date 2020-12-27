import {
  FormControlLabel,
  Checkbox,
  Select,
  MenuItem,
  TextField,
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    padding: 8,
    paddingLeft: 0,
  },
  label: {
    fontSize: '14px',
    marginRight: 4,
  },
})

interface InlineBooleanProps {
  value: boolean
  label?: string
  onChange?: Function
}

export function InlineBoolean(props: InlineBooleanProps) {
  const { value, label, onChange = () => {} } = props
  const classes = useStyles()

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={value}
          onChange={(e) => {
            onChange(e.target.checked)
          }}
          className={classes.root}
          name="checkedB"
          color="primary"
        />
      }
      classes={{ label: classes.label }}
      label={label}
    />
  )
}

interface InlineSelectProps {
  value: any
  options: Array<{ value: any; label: string }>
  label?: string
  onChange?: Function
}

export function InlineSelect(props: InlineSelectProps) {
  const { value, options, label, onChange = () => {} } = props
  //const classes = useStyles()

  return (
    <Select
      label={label || ''}
      value={value}
      margin="dense"
      variant="outlined"
      onChange={(e) => {
        onChange(e.target.value)
      }}
      displayEmpty={true}
      fullWidth={true}
    >
      {options.map((opt: any) => (
        <MenuItem key={opt.value} value={opt.value}>
          {opt.label}
        </MenuItem>
      ))}
    </Select>
  )
}

interface InlineInputProps {
  value: string
  onChange?: Function
}

export function InlineInput(props: InlineInputProps) {
  const { value, onChange = () => {} } = props

  const trimSpaces = (e: React.ChangeEvent<any>) => {
    const value = String(e.target.value || '')
    const trimValue = value.trim()

    if (value !== trimValue) {
      e.target.value = trimValue
      onChange && onChange(trimValue)
    }
  }

  return (
    <TextField
      disabled={false}
      value={value}
      size="small"
      variant="outlined"
      fullWidth={true}
      onChange={(e) => onChange(e.target.value)}
      onBlur={trimSpaces}
    />
  )
}
