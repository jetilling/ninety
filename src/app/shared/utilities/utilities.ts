import { getItem, setItem } from "./storage"


export const getLastKnownRoute = (): string => {
  let lastKnownRoute = getItem('ninety-route')

  if (lastKnownRoute) {
    return lastKnownRoute
  } 

  lastKnownRoute = '/tasks'
  setItem('ninety-route', lastKnownRoute)
  return lastKnownRoute
}