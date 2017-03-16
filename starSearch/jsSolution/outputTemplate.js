"use strict";

/***SAMPLE TEMPLATE:
<Movie Count> Movies Featuring <Actors Name>

Title: <Movie Name> (<Release Year>)
Directed By: <Director Name>
Also Starring: <Other Stars>
*/

//TODO write test for correctly printing output even if data is bad

function getMovieTemplate(m) {
	//Extremely ugly dedenting! This is unfortunately the only way to have it print correctly
	//without using a third party library or using a polyfill of sorts
	return `Title: ${m.title} (${m.releaseYear})
Directed By: ${m.director}
Also Starring: ${m.stars}`;
}

function getOtherActorsString (actor, allActors) {
	//remove current actor from array of actors
	allActors.splice(allActors.indexOf(actor), 1);
	//reduce array to string separated by commas
	return allActors.reduce((otherActors, currentActor) => {
			return otherActors +  ", " + currentActor;
	});
}

function getOutput (actorName, movies) {
	const header = `${movies.length} Movies Featuring ${actorName}`;
	
	let body = '';
	for (let i = 0; i < movies.length; i++) {
		movies[i].stars = getOtherActorsString(actorName, movies[i].stars);
		body += '\n\n';
		body += getMovieTemplate(movies[i]);					
	}
	
	return header + body;
}

module.exports = {
	getOutput
};