window.onload = function() {

	document.getElementById("piezModeOff").onclick = function() {
		chrome.runtime.sendMessage({
	        type: "piez-off"
	    });
	};

	document.getElementById("piezModeImSimple").onclick = function() {
		chrome.runtime.sendMessage({
	        type: "piez-im-simple"
	    });
	};

	document.getElementById("piezModeImAdvanced").onclick = function() {
		chrome.runtime.sendMessage({
	        type: "piez-im-advanced"
	    });
	};

	/*document.getElementById("piezModeBrowserFormatCompare").onclick = function() {
		chrome.runtime.sendMessage({
	        type: "piez-browser-format-compare"
	    });
	};*/

    document.getElementById("piezModeCPI").onclick = function() {
        chrome.runtime.sendMessage({
            type: "piez-cpi"
        });
    };

	var setFormField = function(piezSettings) {
        chrome.storage.local.get("piezCurrentState", function(result) {
			document.getElementById(result["piezCurrentState"]).checked = true;
		});
	};

	setFormField();
};