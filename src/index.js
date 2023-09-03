import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import App from './App';
import reportWebVitals from './utils/reportWebVitals';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();

/*
L.tileLayer('https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});*/
