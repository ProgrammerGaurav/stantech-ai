import React from "react";

const WeatherDetails = ({ weather, error }) => {
	if (!weather) {
		return null;
	}

	return (
		<div className="weather-details">
			{error ? (
				<h2>{error}</h2>
			) : (
				<>
					<h2>{weather.name}</h2>
					<p>Temperature: {weather.main.temp}°C</p>
					<p>Humidity: {weather.main.humidity}%</p>
					<p>Condition: {weather.weather[0].description}</p>
				</>
			)}
		</div>
	);
};

export default WeatherDetails;
