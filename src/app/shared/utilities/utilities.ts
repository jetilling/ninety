import { getItem, setItem, removeItem } from "./storage"


export const getLastKnownRoute = (): string => {
  let lastKnownRoute = getItem('ninety-route')

  if (lastKnownRoute) {
    return lastKnownRoute
  } 

  lastKnownRoute = '/apps'
  setItem('ninety-route', lastKnownRoute)
  return lastKnownRoute
}

export const setLastKnownRoute = (url) => {
  setItem('ninety-route', url)
}

export const clearLastKnownRoute = () => {
  removeItem('ninety-route')
}