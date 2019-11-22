import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
	const APP_ID = 'a744177d';
	const APP_KEY = 'a6781d35187976f59d9209f68a31ea8c';
	const exampleRequest = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

	return (
		<div className="App">
			<form className="search-form">
				<input className="search-bar" type="text" />
				<button className="search-button" type="submit">
					Search
				</button>
			</form>
		</div>
	);
};

export default App;
