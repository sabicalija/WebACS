<template>
  <nav>
		<div id="menuPanel">
			<h1 class="menu_header">AsTeRICS Configuration Suite</h1>
			<div id="mainMenuPanel" class="tabpanel" role="menu">

			  <ul id="mainMenuTablist" class="tablist" role="tablist">
				<li id="tab1" class="tab menuTab" aria-controls="panel1" aria-selected="true" role="tab" tabindex="0">System</li>
				<li id="tab2" class="tab menuTab" aria-controls="panel2" role="tab" aria-selected="false" tabindex="-1">Components</li>
				<li id="tab3" class="tab menuTab" aria-controls="panel3" role="tab" aria-selected="false" tabindex="-1">Edit</li>
				<li id="tab4" class="tab menuTab" aria-controls="panel4" role="tab" aria-selected="false" tabindex="-1">Misc.</li>
			  </ul>

			  <div id="panel1" class="panel menuPanel" aria-labelledby="tab1" role="tabpanel">
				<section class="buttonGroup">
					<h2>ARE</h2>
					<ul class="buttonList">
						<li><button type="button" class="menuButton" id="connectAREBtn"><div class="buttonContents"><img src="../../../public/assets/images/connect.png" alt="Connect to ARE" />Connect<br />to ARE</div></button></li>
						<li><button type="button" class="menuButton" id="disconnectAREBtn" disabled><div class="buttonContents"><img src="../../../public/assets/images/disconnect.png" alt="Disconnect from ARE" />Disconnect<br />from ARE</div></button></li>
						<li><button type="button" class="menuButton" id="uploadModelBtn" disabled><div class="buttonContents"><img src="../../../public/assets/images/Upload.png" alt="Upload model" />Upload<br />Model</div></button></li>
						<li><button type="button" class="menuButton" id="downloadModelBtn" disabled><div class="buttonContents"><img src="../../../public/assets/images/Download.png" alt="Download model" />Download<br />Model</div></button></li>
						<li><button type="button" class="menuButton" id="downloadCompCollBtn" disabled><div class="buttonContents"><img src="../../../public/assets/images/DownloadBundle.png" alt="Download component collection" />Download<br />Component Collection</div></button></li>
					</ul>
				</section>
				<section class="buttonGroup">
					<h2>ARE Storage</h2>			
					<ul class="buttonList">
						<li><button type="button" class="menuButton" id="storeModelAREBtn" disabled><div class="buttonContents"><img src="../../../public/assets/images/storeup.png" alt="Store model on ARE" />Store<br />Model on ARE</div></button></li>
						<li><button type="button" class="menuButton" id="loadModelAREBtn" disabled><div class="buttonContents"><img src="../../../public/assets/images/storedown.png" alt="Load model from storage" />Load Model<br />from Storage</div></button></li>
						<li><button type="button" class="menuButton" id="activateStoredModelBtn" disabled><div class="buttonContents"><img src="../../../public/assets/images/storerun.png" alt="Activate a stored model" />Activate a<br />Stored Model</div></button></li>
						<li><button type="button" class="menuButton" id="deleteStoredModelBtn" disabled><div class="buttonContents"><img src="../../../public/assets/images/storedelete.png" alt="Delete a stored model" />Delete a<br />Stored Model</div></button></li>
						<li><button type="button" class="menuButton" id="setAsAutorunBtn" disabled><div class="buttonContents"><img src="../../../public/assets/images/autorun.png" alt="Set as autorun" />Set as<br />Autorun</div></button></li>
					</ul>
				</section>
				<section class="buttonGroup">
					<h2>Model</h2>			
					<ul class="buttonList">
						<li><button type="button" class="menuButton" id="startModelBtn" disabled><div class="buttonContents"><img src="../../../public/assets/images/StartModel.png" alt="Start model" />Start<br />Model</div></button></li>
						<li><button type="button" class="menuButton" id="pauseModelBtn" disabled><div class="buttonContents"><img src="../../../public/assets/images/PauseModel.png" alt="Pause model" />Pause<br />Model</div></button></li>
						<li><button type="button" class="menuButton" id="stopModelBtn" disabled><div class="buttonContents"><img src="../../../public/assets/images/StopModel.png" alt="Stop model" />Stop<br />Model</div></button></li>
					</ul>
				</section>
				<section class="buttonGroup bg_right">
					<h2>Local</h2>
					<ul class="buttonList">
						<li><button type="button" class="menuButton" id="newModelBtn"><div class="buttonContents"><img src="../../../public/assets/images/new.png" alt="New model" />New<br />Model</div></button></li>
						<li><button type="button" class="menuButton" id="openModelBtn"><div class="buttonContents"><img src="../../../public/assets/images/open.png" alt="Open model" />Open<br />Model</div></button></li>
						<li><button type="button" class="menuButton" id="closeModelBtn"><div class="buttonContents"><img src="../../../public/assets/images/close.png" alt="Close model" />Close<br />Model</div></button></li>
						<li><button type="button" class="menuButton" id="saveModelBtn"><div class="buttonContents"><img src="../../../public/assets/images/save.png" alt="Save model" />Save<br />Model</div></button></li>
					</ul>
				</section>
			  </div>

			  <div id="panel2" class="panel menuPanel" aria-labelledby="tab2" role="tabpanel">
				<section class="buttonGroup">
					<h2>Components</h2>
					<ul class="buttonList componentsMenu">
						<li class="componentsMenu-item"><img src="../../../public/assets/images/sensor.png" alt="Sensors" />Sensors<ul id="sensorsBtnList" class="compMenuL1 compMenu hiddenMenu"></ul></li>
						<li class="componentsMenu-item"><img src="../../../public/assets/images/processor.png" alt="Open model" />Processors<ul id="processorsBtnList" class="compMenuL1 compMenu hiddenMenu"></ul></li>
						<li class="componentsMenu-item"><img src="../../../public/assets/images/actuator.png" alt="Save model" />Actuators<ul id="actuatorsBtnList" class="compMenuL1 compMenu hiddenMenu"></ul></li>
					</ul>
				</section>	
				<section class="buttonGroup bg_right">
					<label for="quickselect">Quickselect</label>
					<input id="quickselect" list="componentsDataList"/>
					<datalist id="componentsDataList">
					</datalist>
					<input id="insertButton" type="button" value="Insert"/>
				</section>	
			  </div>

			  <div id="panel3" class="panel menuPanel" aria-labelledby="tab3" role="tabpanel">
				<section class="buttonGroup">
					<h2>Model Properties</h2>
					<ul class="buttonList">
						<li><button type="button" class="menuButton" id="editModelIDBtn" disabled><div class="buttonContents"><img src="../../../public/assets/images/editModelName.png" alt="Edit Model ID" />Edit<br />Model ID</div></button></li>
						<li><button type="button" class="menuButton" id="showModelDescBtn" disabled><div class="buttonContents"><img src="../../../public/assets/images/editModelDescription.png" alt="Edit Model Description" />Show Model<br />Description</div></button></li>
					</ul>
				</section>
				<section class="buttonGroup bg_right">
					<h2>Edit</h2>			
					<ul class="buttonList">
						<li><button type="button" class="menuButton" id="cutBtn"><div class="buttonContents"><img src="../../../public/assets/images/cut.png" alt="Cut" />Cut</div></button></li>
						<li><button type="button" class="menuButton" id="copyBtn"><div class="buttonContents"><img src="../../../public/assets/images/copy.png" alt="Copy" />Copy</div></button></li>
						<li><button type="button" class="menuButton" id="pasteBtn"><div class="buttonContents"><img src="../../../public/assets/images/paste.png" alt="Paste" />Paste</div></button></li>
						<li><button type="button" class="menuButton" id="deleteSelectionBtn"><div class="buttonContents"><img src="../../../public/assets/images/delete.png" alt="Delete Selection" />Delete<br />Selection</div></button></li>
						<li><button type="button" class="menuButton" id="undoBtn"><div class="buttonContents"><img src="../../../public/assets/images/undo.png" alt="Undo" />Undo</div></button></li>
						<li><button type="button" class="menuButton" id="redoBtn"><div class="buttonContents"><img src="../../../public/assets/images/redo.png" alt="Redo" />Redo</div></button></li>
					</ul>
				</section>
			  </div>

			  <div id="panel4" class="panel menuPanel" aria-labelledby="tab4" role="tabpanel">
				<section class="buttonGroup bg_right">
					<h2>Miscellaneous</h2>			
					<ul class="buttonList">
						<li><button type="button" class="menuButton" id="componentCollMgrBtn" disabled><div class="buttonContents"><img src="../../../public/assets/images/ConfigureBundle.png" alt="Component Collection Manager" />Component<br />Collection Manager</div></button></li>
						<li><button type="button" class="menuButton" id="optionsBtn" disabled><div class="buttonContents"><img src="../../../public/assets/images/Options.png" alt="Options" />Options</div></button></li>
						<li><button type="button" class="menuButton" id="printBtn" disabled><div class="buttonContents"><img src="../../../public/assets/images/Printer.png" alt="Print" />Print</div></button></li>
						<li><button type="button" class="menuButton" id="helpBtn" title="Help (F1)"><div class="buttonContents"><img src="../../../public/assets/images/Question.png" alt="Help (F1)" />Help</div></button></li>
						<li><button type="button" class="menuButton" id="aboutBtn"><div class="buttonContents"><img src="../../../public/assets/images/about.png" alt="About" />About</div></button></li>
					</ul>
				</section>
			  </div>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
  name: "Toolbar"
};
</script>

<style lang="scss" scoped>
</style>