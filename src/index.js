import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from './Button';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Button />
		{/* <App test={{ name: 'GCU' }} name="Max" age="3" gender="male" /> */}
		{/* <App test3="3" /> */}
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
