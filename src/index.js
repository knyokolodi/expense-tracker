import { SpeechProvider } from '@speechly/react-client';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from './context/context';
import './index.css';

ReactDOM.render(
  <SpeechProvider appId='aa0f1fa5-599c-48c5-8af1-90d451a12978' language='en-US'>
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById('root')
);
