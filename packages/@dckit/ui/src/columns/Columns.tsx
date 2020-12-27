import { Box, IconButton, TextField } from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/DeleteOutline'
import CheckIcon from '@material-ui/icons/Check'
import RemoveIcon from '@material-ui/icons/Remove'
import DocumentIcon from '@material-ui/icons/DragIndicator'
import { JsonFieldMapPathSegment } from 'utils/jsonFields'

import clsx from 'clsx'
import { useStyles } from './styles'

export const BooleanColumn = ({ value }: { value: boolean }) =>
  !!value ? <CheckIcon color="action" /> : <RemoveIcon color="action" />

export const NameColumn = (props: { value: string; rowInactive?: boolean }) => {
  const { value, rowInactive } = props
  const classes = useStyles()
  return (
    <Box
      fontWeight="fontWeightBold"
      className={clsx(!!rowInactive && classes.nameColumnInactive)}
    >
      {value}
    </Box>
  )
}

export const MappingColumn = ({
  isMapped,
  readOnly = false,
}: {
  isMapped?: boolean
  readOnly?: boolean
}) => {
  if (isMapped) return <CheckIcon style={{ color: '#26B838' }} />
  if (readOnly) return null
  return <DocumentIcon color="disabled" />
}

export const DeleteColumn = ({ row }: { row?: any }) => {
  const cls = useStyles()

  if (!row?.id) {
    return null
  }

  return (
    <div className={cls.actionColumn}>
      <div className={cls.actionColumnButtons}>
        <IconButton aria-label="delete" color="primary">
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  )
}

export const ArrayIndexColumn = (props: {
  usedSegmentIndex?: JsonFieldMapPathSegment['arrayIndex']
  onUsedSegmentIndexChange?: (
    index: JsonFieldMapPathSegment['arrayIndex']
  ) => any
}) => {
  const { usedSegmentIndex, onUsedSegmentIndexChange } = props

  const handleInputChange = (value: any) => {
    if (!!onUsedSegmentIndexChange && /^(\*|\d)$/.test(value)) {
      onUsedSegmentIndexChange(value === '*' ? value : Number(value))
    }
  }

  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      {!!usedSegmentIndex || usedSegmentIndex === 0 ? (
        <TextField
          variant="outlined"
          size="small"
          style={{ width: 52 }}
          inputProps={{ style: { textAlign: 'center' } }}
          value={usedSegmentIndex}
          onChange={(e) => handleInputChange(e.target.value)}
        />
      ) : null}
    </Box>
  )
}

export const SelectedColumn = (props: {
  rowInactive?: boolean
  rowSelected?: boolean
  rowHovered?: boolean
}) => {
  const { rowInactive, rowHovered, rowSelected } = props
  const classes = useStyles()
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      {!!rowInactive ? null : !!rowSelected ? (
        <CheckIcon color="primary" />
      ) : !!rowHovered ? (
        <Box className={classes.selectedColumnHint}>Select</Box>
      ) : null}
    </Box>
  )
}
