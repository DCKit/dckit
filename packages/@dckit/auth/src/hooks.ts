import { compose } from 'utils'
import { useQuery, useMutation } from 'react-query'
import { useHistory } from 'react-router-dom'
import { useSnackbar } from 'ui'

import {
  authGetCurrentUser,
  authSignIn,
  authSignOut,
  authChangePassword,
  authResetPassword,
  authConfirmPassword,
} from './index'

export function useAuth(params: any = {}) {
  const { routeSignIn = '/sign-in' } = params
  const { push } = useHistory()

  const { data: user, isLoading } = useAuthGetCurrentUser({
    onError: () => push(routeSignIn),
  })

  const isAuthenticated = Boolean(user)
  return { isAuthenticated, isLoading, user }
}

export function useAuthGetCurrentUser(queryConfig?: any) {
  return useQuery('authGetCurrentUser', authGetCurrentUser, {
    ...queryConfig,
  })
}

export function useSignIn(queryConfig?: any) {
  const { mutateAsync, ...rest } = useMutation(authSignIn, {
    ...queryConfig,
  })

  return { signIn: mutateAsync, ...rest }
}

export function useChangePassword(queryConfig?: any) {
  const { mutateAsync, ...rest } = useMutation(authChangePassword, {
    ...queryConfig,
  })

  return { changePassword: mutateAsync, ...rest }
}

export function useResetPassword(queryConfig?: any) {
  const { mutateAsync, ...rest } = useMutation(authResetPassword, {
    ...queryConfig,
  })

  return { resetPassword: mutateAsync, ...rest }
}

export function useConfirmPassword(queryConfig?: any) {
  const { mutateAsync, ...rest } = useMutation(authConfirmPassword, {
    ...queryConfig,
  })

  return { confirmPassword: mutateAsync, ...rest }
}

export function useSignOut(queryConfig?: any) {
  const { onError } = useSnackbar()
  return useQuery('authSignOut', authSignOut, {
    ...queryConfig,
    onError: compose(onError, queryConfig?.onError),
  })
}
