import { TableOptions } from 'react-table'

export type TableProps = TableOptions<{}> & {
  rowTo?: string
  isLoading?: boolean
  Container?: any
  containerProps?: any
  containerStyle?: any
  headerCellStyle?: any
}
