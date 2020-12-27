import { Button } from '@material-ui/core'
import { useTheme } from 'ui/constateTheme'

export function CTAButton(props: any) {
  const { buttonOutlined, buttonSmall } = useTheme()
  const { style = {}, ...rest } = props
  return (
    <Button
      variant={buttonOutlined ? 'outlined' : 'contained'}
      size={buttonSmall ? 'small' : 'medium'}
      style={{ minWidth: 88, ...style }}
      {...rest}
    />
  )
}
