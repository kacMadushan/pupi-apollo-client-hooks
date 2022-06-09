import { useState, useEffect } from 'react';

const useThemeInLocalStorage = (
  initialState = false,
  { serialize = JSON.stringify, deserialize = JSON.parse } = {},
) => {
  const [useDarkTheme, setUseDarkTheme] = useState(
    () => {
      const valueInLocalStorage = window.localStorage.getItem('theme');
      if (valueInLocalStorage) {
        return deserialize(valueInLocalStorage)
      }
      return typeof initialState === 'function' ? initialState() : initialState
    }
  )

  useEffect(() => {
    window.localStorage.setItem('theme', serialize(useDarkTheme))
  }, [serialize, useDarkTheme])

  return [useDarkTheme, setUseDarkTheme]
}

export default useThemeInLocalStorage;