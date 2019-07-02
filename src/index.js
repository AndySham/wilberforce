import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App'
import './index.css';

document.getElementsByTagName('title')[0].innerText = 'The Wilberforce Club'

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
