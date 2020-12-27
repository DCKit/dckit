import { CTAButton } from 'ui'

export function PageButton(props: any) {
  const { label, onClick, ...other } = props

  return (
    <CTAButton
      color="primary"
      onClick={onClick}
      style={{ marginLeft: 32 }}
      {...other}
    >
      {label}
    </CTAButton>
  )
}
