import { Grid, Breadcrumbs as MuiBreadcrumbs, Link } from '@material-ui/core'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import { useHistory } from 'react-router-dom'
import { useProxyHandler } from '../UnsavedDialog'

export function Breadcrumbs(props: any = {}) {
  const { items = [] } = props

  return (
    <Grid item xs={12} style={{ paddingTop: 8 }}>
      <MuiBreadcrumbs
        separator={
          <NavigateNextIcon
            style={{
              fontSize: '1rem',
              color: '#0288d1',
            }}
          />
        }
        aria-label="breadcrumb"
      >
        {items.map((item: any) => {
          const { label, to } = item
          return to ? (
            <LinkItem key={label} {...item} />
          ) : (
            <Item key={label} {...item} />
          )
        })}
      </MuiBreadcrumbs>
    </Grid>
  )
}

function LinkItem(props: any) {
  const { label, to } = props
  const { push } = useHistory()
  const proxyClick = useProxyHandler(() => push(to))

  return (
    <Link
      style={{
        color: '#0288d1',
        fontSize: '0.85rem',
        cursor: 'pointer',
      }}
      onClick={proxyClick}
    >
      {label}
    </Link>
  )
}

function Item(props: any) {
  const { label } = props

  return (
    <span
      key={label}
      style={{ color: '#777', fontSize: '0.85rem', cursor: 'default' }}
    >
      {label}
    </span>
  )
}
