import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './components/Clock';

const App = () => {
    return <Clock />
}

ReactDOM.render(<App />, document.getElementById('root'));