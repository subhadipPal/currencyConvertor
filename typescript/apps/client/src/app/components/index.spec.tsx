import { render } from '@testing-library/react';
import axios from 'axios';
import * as reactRedux from 'react-redux'
import * as actions from '../../redux/actions'

import CurrencyConverter from './index'

const mockStore = {
  currencies: {
    conversionRate: {},
    convertedCurrency: {
      convertedAmount: 500
    }
  }
}

const mockDispatch = jest.fn()

describe('Currency Converter test', () => {

  const mockUseSelector = jest.spyOn(reactRedux, 'useSelector')
  const mockUseDispatch = jest.spyOn(reactRedux, 'useDispatch')
  const mockFetchConversionRate = jest.spyOn(actions, 'fetchConversionRate')

  beforeEach(() => {
    mockUseDispatch.mockImplementation(() => mockDispatch);
    mockUseSelector.mockImplementation(selector => selector(mockStore));
    mockFetchConversionRate.mockImplementation(() => jest.fn())
  })
  afterEach(() => {
    mockUseDispatch.mockClear();
    mockUseSelector.mockClear();
    mockFetchConversionRate.mockClear();
  })

  it('should dispatch fetch conversion rate at load', () => {

    render(<CurrencyConverter />)
    
    expect(mockFetchConversionRate).toHaveBeenCalledWith('USD', 'USD', 1)
  })
})