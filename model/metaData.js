ACS.metaData = function(key, // String
						value) { // String
	// private variables

	// private methods
	
	// public stuff
	var returnObj = {};
	
	returnObj.value = value;
	
	returnObj.getKey = function() {
		return key;
	}

	// constructor code
	
	return returnObj;
}