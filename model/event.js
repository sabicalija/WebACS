ACS.event = function(id, // String; can be changed, but must be unique
					 description, // String
					 parentComponent) { // ACS.component
	// private variables

	// private methods
	
	// public stuff
	var returnObj = {};
	
	returnObj.getId = function() {
		return id;
	}
	
	returnObj.getName = function() {
		return name;
	}
	
	returnObj.getDescription = function() {
		return description;
	}
	
	returnObj.getParentComponent = function() {
		return parentComponent;
	}

	// constructor code
	
	
	return returnObj;
}