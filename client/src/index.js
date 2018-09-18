import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

setTimeout(() => {
    ReactDOM.render(<App />, document.getElementById('root'));
}, 0)
registerServiceWorker();
