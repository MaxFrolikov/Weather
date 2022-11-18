import { useState } from 'react'
import {useGetLocation} from "./hooks/useGetLocation";
import {Suggestion} from "./Suggestion";

export function Input ({getLocation, getCity}) {
	const [userInput, setUserInput] = useState('')

	const [location, city, setCity] = useGetLocation(userInput)

	const doneRequest = () => {
		if(!city) return
		getLocation(location)
		setUserInput('')
		getCity(city)
		setCity('')
	}

	const handleChange = (e) => {
		setUserInput(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		doneRequest()
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="search">
				<input
					value={userInput}
					type='text'
					placeholder='Saint-Petersburg'
					onChange={handleChange}
				/>
				<button>🔍</button>
			</div>
			<Suggestion
				userInput = {userInput}
				suggestedCity = {city}
				doneRequest = {doneRequest}
			/>
		</form>
	)
}