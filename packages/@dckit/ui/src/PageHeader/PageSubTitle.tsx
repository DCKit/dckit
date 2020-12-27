export function PageSubTitle(props: any) {
  const { title, style = {} } = props
  return (
    <span
      style={{
        marginLeft: 24,
        color: '#555',
        fontSize: 16,
        whiteSpace: 'nowrap',
        cursor: 'default',
        opacity: '0.9',
        ...style,
      }}
    >
      {title}
    </span>
  )
}
