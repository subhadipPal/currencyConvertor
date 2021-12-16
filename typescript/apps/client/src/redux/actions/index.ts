import Axios from 'axios'
import { Dispatch } from 'redux'
import { Action, CURRENCIES, CurrencyGlobal, CurrencyGlobalStateType, ConvertedCurrencyType } from '../../types'
import { ACTIONS } from './action-types'


export const convertCurrency = (
  amount: number,
  finalCurrency: CURRENCIES) => ({
    type: ACTIONS.CONVERTED_CURRENCY,
    payload: {
      finalCurrency,
      sourceAmount: amount,
    }
  })


export const fetchConversionRate =
  (sourceCurrency: CURRENCIES, finalCurrency: CURRENCIES, amount: number) =>
    async (dispatch: Dispatch<Action>) => {
      try {
        const { data: conversionRate } =
          await Axios.get<CurrencyGlobalStateType>(`http://localhost:3333/api/currency/${sourceCurrency}`)

        dispatch({
          type: ACTIONS.FETCH_CONVERSION_RATE,
          payload: conversionRate
        })

        dispatch(convertCurrency(amount, finalCurrency))
      }
      catch (error) {
        console.error('Api call failed')
      }
    }
