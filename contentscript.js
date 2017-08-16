// X-Ray
'use strict';

chrome.extension.sendMessage({
	cmd : "isEnabled"
}, function (response) {
	if (response == true) {
    console.log('it works');
	}
});
