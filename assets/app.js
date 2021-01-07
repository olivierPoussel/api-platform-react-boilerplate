import './styles/app.css';
import React from 'react';
import ReactDOM from 'react-dom';

console.log('test');

const App = () => {
    return <h1>React app</h1>;
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);