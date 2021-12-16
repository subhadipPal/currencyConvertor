import { ACTIONS } from "./redux/actions/action-types"
import store from "./redux/store"

export type CurrencyStateType = {
  amount: number,
  sourceCurrencyName: CURRENCIES,
  finalCurrencyName: CURRENCIES
}

export type ErrorStateType = {
  error: boolean,
  errorMsg: string
}

export enum CURRENCIES {
  EUR="EUR", GBP="GBP", USD="USD"
}

export type CurrencyValues = `${CURRENCIES}`

export type CurrencyGlobalStateType = {
  source: CURRENCIES,
  quotes: {
    [P in CurrencyValues]: number
  }
}

export type Action = {
  type: ACTIONS,
  payload ?: unknown
}

export type ConvertedCurrencyType = {
  finalCurrency: CURRENCIES,
  sourceAmount: number,
  convertedAmount: number
}
export type CurrencyGlobal = { 
  conversionRate: CurrencyGlobalStateType, 
  convertedCurrency: ConvertedCurrencyType
}

export type RootState = ReturnType<typeof store.getState>