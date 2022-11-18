import {useEffect, useState} from "react"
import axios from "axios"
import {useDebounce} from "./useDebounce";

export function useGetLocation (newRequest) { //moscow - __

	const API_URL = 'https://autocomplete.travelpayouts.com/places2?types[]=city&term='

	const [coordinates, setCoordinates] = useState({})
	const [city, setCity] = useState('')

	const request = useDebounce(newRequest, 840) //mos

	useEffect(() => {
		if(!request) return
		const URL = API_URL + request

		axios.get(URL).then(({data}) => {
			setCoordinates(data[0].coordinates)
			setCity(data[0].name)
		}).catch(err => (console.log(err)))
	}, [request])

	return [coordinates, city, setCity]
}