import { combineReducers } from "redux"

import CurrencyReducer from './currencyReducer'

const rootReducer = combineReducers({
  currencies: CurrencyReducer
})

export default rootReducer