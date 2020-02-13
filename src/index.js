import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Firebase, { FirebaseContext } from './components/Firebase';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<FirebaseContext.Provider value={new Firebase()}>
    <App />
</FirebaseContext.Provider>, document.getElementById('root'));

// firebase consummer innehåller koppling till firebase det kommer att göra en ny instant av firebase och då sker kontakt med firebase. Provider kommer att returneras

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
