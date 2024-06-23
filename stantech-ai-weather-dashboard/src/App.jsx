// src/App.js
import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import Search from "./components/Search";
import WeatherDetails from "./components/WeatherDetails";
import loadingGif from "./assets/loading.gif";

const App = () => {
	const [weather, setWeather] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchWeather = async (city) => {
		setLoading(true);
		setError(null);
		try {
			const response = await axios.get(
				`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
			);

			setWeather(response.data);
		} catch (err) {
			setError("City not found");
		}
		setLoading(false);
	};

	return (
		<div className="app">
			<h1>Weather Dashboard</h1>
			<Search onSearch={fetchWeather} />
			{loading ? (
				<div className="loading">
					<img src={loadingGif} alt="" />
				</div>
			) : (
				<WeatherDetails weather={weather} error={error} />
			)}
		</div>
	);
};

export default App;
