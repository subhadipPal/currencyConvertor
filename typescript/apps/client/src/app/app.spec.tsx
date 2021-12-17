import { render } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';
import { Provider } from 'react-redux';

import App from './app';

describe('App', () => {

  let wrapper;

  beforeEach( ()=> {
    wrapper = render(
      <Provider store={store}>
        <BrowserRouter>
        <App />
      </BrowserRouter>
      </Provider>
    );
  })
  it('should render successfully', () => {
    const { baseElement } = wrapper
    
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = wrapper

    expect(getByText('Welcome to the client !')).toBeTruthy();
  });
});
