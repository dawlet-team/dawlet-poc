import { useReducer, useCallback } from "react";
import { DawletConfigDict } from "../types";

type Action = {
  type: 'check',
  key: string
} | {
  type: 'localize'
  key: string
}

const reducer = (state: DawletConfigDict, action: Action): DawletConfigDict => {
  switch (action.type) {
    case 'check': {
      const target = state[action.key]
      const checked: typeof target = {
        ...target,
        checked: !target.checked
      }
      return {
        ...state,
        [action.key]: checked
      }
    }
    /**
     * TODO:
     * when localize is chosen, prefer to use IPC than http.
     * i.e.: spawn electron
     */
    case 'localize': {}
  }
  return state
}

export const useConfiguredDawlets = (availableDawlets: Dawlet.Config[]) => {
  let initialState: DawletConfigDict = {}
  availableDawlets.forEach(dawlet => {
    initialState[dawlet.name] = Object.assign(dawlet, { checked: false })
  })

  const [ configuredDawlets, dispatch ] = useReducer(reducer, initialState)

  const checkDawlet = useCallback((key: string) => {
    dispatch({ type: 'check', key })
  }, [configuredDawlets])

  /**
   * TODO
   * const localizeDawlet = useCallback()
   */

  return { 
    configuredDawlets,
    checkDawlet
  }
}