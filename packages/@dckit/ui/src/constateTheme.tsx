import { useLocalStorage } from 'utils/hooks'
import constate from 'constate'

export interface ThemeType {
  sidebarDark: boolean
  buttonOutlined: boolean
  buttonSmall: boolean
  colorHeaders: boolean
}

interface InitialThemeType {
  initialTheme?: ThemeType
}

const initialTheme: ThemeType = {
  sidebarDark: false,
  buttonOutlined: false,
  buttonSmall: false,
  colorHeaders: false,
}

function useThemeState(initial?: InitialThemeType) {
  const initialState = initial?.initialTheme || initialTheme

  const [theme, setThemeState] = useLocalStorage('theme', initialState)

  const setTheme = (nextState: Partial<ThemeType>) =>
    setThemeState((state: ThemeType) => ({ ...state, ...nextState }))

  return { theme, setTheme }
}

const [ThemeProvider, useTheme, useSetTheme] = constate(
  useThemeState,
  (value) => value.theme,
  (value) => value.setTheme
)

export { ThemeProvider, useTheme, useSetTheme }
