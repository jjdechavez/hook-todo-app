import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FilterableProductTable from './components/DocsProduct/FilterableProductTable';
import RefDOM from './components/Accessibility/mouse-pointerEvents';
import Hook from './components/Hooks';
import {product} from './data';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<FilterableProductTable products={product} />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
