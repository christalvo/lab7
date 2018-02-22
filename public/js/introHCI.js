'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {

}

$('button').click(likeClick);

function likeClick(event) {
	console.log("Clicked on Like");
	event.preventDefault();
	ga("send", "event", 'like', 'click');
}
