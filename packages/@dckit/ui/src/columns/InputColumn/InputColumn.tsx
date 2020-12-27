import { Box, TextField } from '@material-ui/core'

export const InputColumn = (props: any) => {
  const { value, rowInactive, onValueChange } = props
  return !rowInactive ? (
    <Box display="flex" alignItems="center" justifyContent="flex-start">
      <TextField
        variant="outlined"
        size="small"
        style={{ width: '60%' }}
        inputProps={{ style: { textAlign: 'left' } }}
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      />
    </Box>
  ) : null
}
