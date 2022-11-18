import {useGetWeather} from "./hooks/useGetWeather";

export function Weather ({location, city}) {
	const weather = useGetWeather(location, city)

	if(!weather.weather) return (
		<div>Loading...</div>
	)

	return(
		<div className="weather">
			<div className="city">{city}</div>
			<div className="main">
				<div className="temp">
					<div id="c">{weather.main.temp_c}°C</div>
					<div id="f">{weather.main.temp_f}°F</div>
				</div>
				<div className="text">Ощущается как:</div>
				<div className="feels">
					<div id="c">{weather.main.feels_like_c}°C</div>
					<div id="f">{weather.main.feels_like_f}°F</div>
				</div>
			</div>
			<div className="secondary">
				<img id="icon"
				     src={`http://openweathermap.org/img/wn/${weather.weather.icon}@2x.png`}
				     alt=""
				/>
				<div className="info">
					<div className="pressure">
						{weather.main.pressure_m} мм.рт.ст
					</div>
					<div className="clouds">
						Облачноcть: {weather.clouds.all}%
					</div>
					<div className="wind">
						<img id="back"
						src="https://i.imgur.com/U68345X.png"
						alt=""
						/>
						<img id="arrow"
					    src="https://flaticons.net/icon.php?slug_category=mobile-application&slug_icon=left-arrow"
						style={{transform: `rotate(${weather.wind.deg-90}deg)`}}
						alt=""
						/>
						<div>{weather.wind.speed} м/с</div>
					</div>
				</div>
			</div>
		</div>
	)
}