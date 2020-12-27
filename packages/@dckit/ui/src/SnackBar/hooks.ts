import { useSnackbar as useNotistack, VariantType } from 'notistack'
import { errorMessage } from 'utils'

export const useSnackbar = () => {
  const { enqueueSnackbar } = useNotistack()

  const enqueue = (variant: VariantType) => (message: any) =>
    enqueueSnackbar(message, { variant })

  const onError = (error: any) => enqueue('error')(errorMessage(error))

  const shackbars = {
    onError,
    showError: enqueue('error'),
    showSuccess: enqueue('success'),
    showWarning: enqueue('warning'),
    showInfo: enqueue('info'),
  }

  return shackbars
}
