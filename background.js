var isEnabled = true;

chrome.browserAction.onClicked.addListener(function (tab) {
	isEnabled = !isEnabled;
  console.log("background onclicked " + isEnabled);
	if (isEnabled) {
		chrome.browserAction.setIcon({
			path : "on.png"
		});
	} else {
		chrome.browserAction.setIcon({
			path : "off.png"
		});
	}
});

chrome.extension.onMessage.addListener(
	function (request, sender, sendResponse) {
	if (request.cmd == "isEnabled") {
		sendResponse(isEnabled);
	}
});