import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';

const container = document.querySelector('#app');
// const root = ReactDOM.createRoot(container);
// console.log(root);
// root.render(<App />);

const reactObj = ReactDOM.render(<App/>, container, (e) => {
    console.log('root render')
});