ACS.eventChannel = function(id) { // String
	// private variables

	// private methods
	
	// public stuff
	var returnObj = ACS.channel(id);
	
	returnObj.listener = {};
	returnObj.trigger = {};

	// constructor code
	
	
	return returnObj;
}