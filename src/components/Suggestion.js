export function Suggestion ({userInput, suggestedCity, doneRequest}) {
	if(!suggestedCity || !userInput) return

	return (
		<div className='suggestion' onClick={() => doneRequest()}>
			⋙ {suggestedCity}
		</div>
	)
}