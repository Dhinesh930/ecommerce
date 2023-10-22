import React from 'react';
import Index from './router/Index'; 
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Index />
      </div>
    </Provider>
  );
}

export default App;
