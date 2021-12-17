import { CURRENCIES, CurrencyGlobalStateType, Action, CurrencyGlobal, ConvertedCurrencyType } from "../../types";
import { ACTIONS } from '../actions/action-types'

const INITIAL_STATE: CurrencyGlobal = {
  conversionRate: {
    source: CURRENCIES.USD,
    quotes: {
      USD: 0,
      EUR: 0,
      GBP: 0
    }
  },
  convertedCurrency: {
    finalCurrency: CURRENCIES.USD,
    sourceAmount: 1,
    convertedAmount: 1
  }
}

const CurrencyReducer = (state = INITIAL_STATE, action: Action): CurrencyGlobal => {
  switch (action.type) {
    case ACTIONS.FETCH_CONVERSION_RATE:
      return { ...state, conversionRate: action.payload as CurrencyGlobalStateType }
    case ACTIONS.CONVERTED_CURRENCY:
      const { sourceAmount, finalCurrency } = action.payload as ConvertedCurrencyType
      const { conversionRate: { quotes } } = state

      return {
        ...state, convertedCurrency: {
          finalCurrency,
          sourceAmount,
          convertedAmount: !isNaN(sourceAmount) ? sourceAmount * quotes[finalCurrency] : 0
        }
      }
    default:
      return state
  }
}

export default CurrencyReducer