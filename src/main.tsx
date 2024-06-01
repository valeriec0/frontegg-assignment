import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import './index.css';
import { FronteggProvider } from '@frontegg/react';

const contextOptions = {
  // for 3.a.vi
  baseUrl: 'https://app-quad274s1e8a.frontegg.com',
  clientId: '60da8b14-d971-42a3-9ab7-3b231df46fd7'
};

const authOptions = {
 // keepSessionAlive: true // Uncomment this in order to maintain the session alive
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <FronteggProvider 
    contextOptions={contextOptions} 
    hostedLoginBox={true} // for embdedded login, switch to false
    authOptions={authOptions}>
        <App />
    </FronteggProvider>,
    document.getElementById('root')
);
