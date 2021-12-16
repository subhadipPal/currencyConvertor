import React, { useState, useEffect } from 'react'
import  { useDispatch, useSelector } from 'react-redux'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SwapVerticalIcon from '@mui/icons-material/SwapVert'

import { CURRENCIES, CurrencyStateType, ErrorStateType, RootState } from '../../types'
import { FormComponent, IconComponent, ErrorComponent } from '../StyledComponents' 

import { fetchConversionRate, convertCurrency} from '../../redux/actions'

const CurrencyConverter: React.FC = () => {
  const [currency, setCurrency] = useState<CurrencyStateType>({
    amount: 1,
    sourceCurrencyName: CURRENCIES.USD,
    finalCurrencyName: CURRENCIES.USD
  })
  const [error, setError] = useState<ErrorStateType>({
    error: false,
    errorMsg: ''
  })

  const dispatch = useDispatch()

  const { convertedCurrency: {convertedAmount} } = useSelector( (state: RootState) => state.currencies)

  useEffect(() => {
    const { amount } =  currency
    if (amount < 1 || amount > 1000) {
      setError({
        error: true,
        errorMsg: 'Amount must be in the range of 1 < amount < 1000'
      })
    }
    else {
      setError({
        error: false,
        errorMsg: undefined
      })
      debugger
      if(!isNaN(amount)){
        dispatch(convertCurrency( amount, currency.finalCurrencyName) )
      }
    }

    return () => {
      setError({
        error: false,
        errorMsg: undefined
      })
    }
  }, [currency.amount, currency.finalCurrencyName])


  useEffect(() => {
    dispatch(fetchConversionRate(currency.sourceCurrencyName, currency.finalCurrencyName, 1))
  }, [])

  const handleSourceCurrencyChange = (e) => {
    const {
      target: { value },
    } = e

    setCurrency({...currency, sourceCurrencyName: CURRENCIES[value]})

    dispatch(fetchConversionRate(value, currency.finalCurrencyName, currency.amount))
  }

  return (
    <>
      <FormComponent>
        <TextField
          label="Enter the amount you want to convert"
          type="number"
          defaultValue={1}
          sx={{minWidth: '350px'}}
          onChange={ (e) => setCurrency({ ...currency, amount: parseFloat(e.target.value) })}
          error={error.error}
        />
        <FormControl fullWidth sx={{marginLeft: '10px'}}>
          <InputLabel>From currency</InputLabel>
          <Select
            value={currency.sourceCurrencyName}
            label="Currency"
            defaultValue={CURRENCIES.USD}
            onChange={ handleSourceCurrencyChange }
          >
            <MenuItem value={CURRENCIES.USD}>USD</MenuItem>
            <MenuItem value={CURRENCIES.GBP}>GBP</MenuItem>
            <MenuItem value={CURRENCIES.EUR}>EUR</MenuItem>
          </Select>
        </FormControl>
      </FormComponent>
      <IconComponent>
        <SwapVerticalIcon />
      </IconComponent>
      <FormComponent>
        <TextField
          label="Converted Value"
          disabled
          sx={{minWidth: '350px'}}
          value={convertedAmount ?? ""}
          error={error.error}
        />
        <FormControl fullWidth sx={{marginLeft: '10px'}}>
          <InputLabel>To currency</InputLabel>
          <Select
            value={currency.finalCurrencyName}
            label="Currency"
            defaultValue={CURRENCIES.USD}
            onChange={ (e) => setCurrency({ ...currency, finalCurrencyName: CURRENCIES[e.target.value]}) }
          >
            <MenuItem value={CURRENCIES.USD}>USD</MenuItem>
            <MenuItem value={CURRENCIES.GBP}>GBP</MenuItem>
            <MenuItem value={CURRENCIES.EUR}>EUR</MenuItem>
          </Select>
        </FormControl>
      </FormComponent>
      { error && <ErrorComponent>{error.errorMsg}</ErrorComponent>}
    </>
  )
}

export default CurrencyConverter