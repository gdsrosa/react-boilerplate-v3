import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from './store/types';
import { handleSetMessage } from './store/modules/greet';
import Button from '@components/Button';
import './App.scss';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { message } = useSelector((state: RootState) => state.greetReducer);

  return (
    <div className="App">
      Click on the button see a message!
      <Button
        type="button"
        onClick={() =>
          dispatch(handleSetMessage('Hello, explore the application go to'))
        }
      >
        See message
      </Button>
      {message && (
        <p>
          {message} <code>App.tsx</code>{' '}
        </p>
      )}
    </div>
  );
};

export default App;
