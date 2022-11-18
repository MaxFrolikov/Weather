import {Input} from "./components/Input";
import {useState} from "react";
import {Weather} from "./components/Weather";

function App() {
	const [location, setLocation] = useState({lon: 30.315785, lat: 59.939039})
	const [city, setCity] = useState('Санкт-Петербург')

	const getLocation = (userInput) => {
		if(userInput)
			setLocation(userInput)
	}

	const getCity = (City) => {
		if(City)
			setCity(City)
	}

	return (
	    <div className="App">
			<Input getLocation = {getLocation} getCity = {getCity}/>
		    <Weather location = {location} city = {city}/>
	    </div>
  );
}

export default App;
