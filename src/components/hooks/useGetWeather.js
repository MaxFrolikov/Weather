import axios from "axios"
import {useEffect, useState} from "react";

const API_URl = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = '765a2a3e7d5942ce88ecdb7ec42bd8be'

export function useGetWeather (location, city) {

	const [weather, setWeather] = useState({})

	useEffect( () => {
		if(!location.lat) return

		const URL = `${API_URl}?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}`

		const round = (e) => {
			return Math.round(Number(e) * 10) / 10
		}

		axios.get(URL).then(({data}) => {
			const newWeather = {
				city:       data.name,
				weather:    data.weather[0],
				main: {
					...data.main,
					temp_c: round(data.main.temp - 273.15),
					temp_f: round((data.main.temp - 273.15) * 9/5 + 32),
					feels_like_c: round(data.main.feels_like - 273.15),
					feels_like_f: round((data.main.feels_like - 273.15) * 9/5 + 32),
					pressure_m: round(data.main.pressure / (1+1/3)),
				},
				visibility: data.visibility,
				wind:       data.wind,
				clouds:     data.clouds
			}

			setWeather(newWeather)

		}).catch(err => (console.log(err)))
	}, [location, city])

	return weather
}