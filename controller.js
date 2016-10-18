
var app = angular.module('chat', [])

.controller('chatCtrl', function($scope){
	// A function to handle sending messages.
	function sendMessage(e) {
		var receiver = window.parent.frames;
		var msg = e.currentTarget.previousElementSibling.value;
		for (var i = 0; i < frames.length; i++) { 
			receiver[i].postMessage(msg, '*');
		}
	}

	var btn = document.getElementsByClassName('send');
	for (var i = 0; i < btn.length; i++) {
		console.log('adding event listener', btn[i]);
		btn[i].addEventListener('click', sendMessage);
	}
	$scope.createChat = function() {
		console.log('create chat');
		var $newChat = $("<div class='col-md-4'><iframe id='iframe' src='chat.html'></iframe><form name='form'><input type='text' class='msg' value='Your Message'/><input type='button' class='send'></div>");
		$('#chatContainer').append($newChat);
		
		$newChat.find('.send')[0].addEventListener('click', sendMessage);
	}	
});
