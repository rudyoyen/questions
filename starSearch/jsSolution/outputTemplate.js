"use strict";

/***SAMPLE TEMPLATE:
<Movie Count> Movies Featuring <Actors Name>

Title: <Movie Name> (<Release Year>)
Directed By: <Director Name>
Also Starring: <Other Stars>
*/

//TODO write test for correctly printing output even if data is bad

function otherActorsString (actor, allActors) {
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
		let m = movies[i];
		m.stars = otherActorsString(actorName, m.stars);
		body += '\n\n';
		body += `Title: ${m.title} (${m.releaseYear})
Directed By: ${m.director}
Also Starring: ${m.stars}`;
	}
	
// 	let fullBody = movies.reduce((body, movie) => {
// 		let stars = otherActorsString(actorName, movie.stars);
// 		let template = `Title: ${movie.title} (${movie.releaseYear})
// Directed By: ${movie.director}
// Also Starring: ${stars}`;
// 		return body + template + '\n\n';
// 	})
	
	return header + body;
}

module.exports = {
	getOutput
};