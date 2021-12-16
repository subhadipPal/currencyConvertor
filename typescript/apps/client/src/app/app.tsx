import { ReactComponent as Logo } from './logo.svg';
import { Task } from './Task';
import { VFC } from 'react';
import { StyledAppFrame } from './StyledComponents';
import CurrencyConverter from './components';

export const App: VFC = () => (
  <StyledAppFrame>
    <header className="flex">
      <Logo width="75" height="75" />
      <h1>Welcome to the client !</h1>
    </header>

    <main>
      <CurrencyConverter />
    </main>

    {/* YOUR CODE HERE */}

  </StyledAppFrame>
);

export default App;
