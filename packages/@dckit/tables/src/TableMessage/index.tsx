export function TableMessage(props: any) {
  const { children, style = {}, ...other } = props
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '14px 16px',
        color: '#888',
        fontSize: 12,
        ...style,
      }}
      {...other}
    >
      {children}
    </div>
  )
}
