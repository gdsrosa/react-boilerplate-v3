import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from './store/types';
import { handleSetMessage } from './store/modules/greet';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { message } = useSelector((state: RootState) => state.greetReducer);

  return (
    <div>
      Click on the button see a message!
      <button
        type="button"
        onClick={() => dispatch(handleSetMessage('Hello!'))}
      >
        See message
      </button>
      {message && <h2>{message}</h2>}
    </div>
  );
};

export default App;
