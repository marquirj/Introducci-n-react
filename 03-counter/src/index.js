import React from 'react';
//ReactDom encargado de renderizar en html
import ReactDOM from 'react-dom';
//import PrimeraApp from './PrimeraApp';
//Hay que poner la extensión y poner la ruta
import './index.css';
import CounterApp from './CounterApp';
const divRoot = document.querySelector('#root');

//ReactDOM.render(<PrimeraApp saludo='Hola, soy Juan' />, divRoot);
ReactDOM.render(<CounterApp />, divRoot);