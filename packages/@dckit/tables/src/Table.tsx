import { useTable } from 'react-table'

import {
  Table as MuiTable,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@material-ui/core'

import { LoadingText } from '../Loading'
import { TableMessage } from './TableMessage'
import { TableProps } from './types'
import { useStyles } from './styles'

const DefaultContainer = (props: any) => <>{props.children}</>

export function Table(props: TableProps) {
  const cls = useStyles()
  const {
    columns,
    data = [],
    isLoading = false,
    Container = DefaultContainer,
    containerStyle = {},
    containerProps,
    headerCellStyle = {},
  } = props
  const table = useTable({ columns, data })

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = table

  return (
    <Container {...containerProps} style={{ ...containerStyle }}>
      <MuiTable {...getTableProps()}>
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => {
                return (
                  <TableCell
                    {...column.getHeaderProps()}
                    width={column.width}
                    className={cls.headerCell}
                    style={{ ...headerCellStyle }}
                  >
                    {column.render('Header')}
                  </TableCell>
                )
              })}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row)
            return (
              <TableRow {...row.getRowProps()} className={cls.tableRow}>
                {row.cells.map((cell) => {
                  return (
                    <TableCell {...cell.getCellProps()} padding="none">
                      {cell.render('Cell')}
                    </TableCell>
                  )
                })}
              </TableRow>
            )
          })}
        </TableBody>
      </MuiTable>
      {isLoading && (
        <TableMessage>
          <LoadingText>Loading...</LoadingText>
        </TableMessage>
      )}
      {!isLoading && data.length === 0 && <TableMessage>no data</TableMessage>}
    </Container>
  )
}
