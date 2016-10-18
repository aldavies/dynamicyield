window.onload = function() {
	// Get the window displayed in the iframe.
	// var receiver = document.getElementsByTagName('iframe').value;
  
	// Get a reference to the 'Send Message' button.
	var btn = document.getElementsByClassName('send');

	// A function to handle sending messages.
	function sendMessage(e) {
		// Prevent any default browser behaviour.
		e.preventDefault();
		var receiver = window.parent.frames;
			for (var i = 0; i < frames.length; i++) { 
  			receiver[i].postMessage("Hello", '*');
			}
	}
	for (var i = 0; i < btn.length; i++) {
		btn[i].addEventListener('click', sendMessage);
	}
}