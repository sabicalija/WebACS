ACS.addComponentAction = function(parentModel, // ACS.model
								  c) { // ACS.component
	// private variables
			
	// private methods
	
	// public stuff
	var returnObj = acsAction(parentModel);
	
	returnObj.execute = function() {
		parentModel.addComponent(c);
		parentModel.undoStack.push(returnObj);
	}
	
	returnObj.undo = function() {
		parentModel.removeComponent(c);
		parentModel.redoStack.push(returnObj);
	}

	// constructor code
	
	
	return returnObj;
}

