import { Container } from '@material-ui/core'
import { useTabContext } from '@material-ui/lab/TabContext'

const DefaultContainer = (props: any) => (
  <Container maxWidth="lg">{props.children}</Container>
)

export function TabPanel(props: any) {
  const {
    children,
    className,
    style,
    value: id,
    Container = DefaultContainer,
    containerProps,
    ...other
  } = props
  const context = useTabContext()

  if (context === null) {
    throw new TypeError('No TabContext provided')
  }
  const tabId = context.value

  return (
    <div
      className={className}
      style={{
        width: '100%',
        ...style,
        position: 'absolute',
        left: 0,
        marginTop: 48,
        visibility: id === tabId ? 'visible' : 'hidden',
      }}
      {...other}
    >
      <Container {...containerProps}>{children}</Container>
    </div>
  )
}
