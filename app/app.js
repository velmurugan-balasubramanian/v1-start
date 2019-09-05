
$(document).ready(function () {

	app.initialized()
		.then(function (_client) {
			window.client = _client;
			client.events.on('app.activated',
				function () {

                    
				});
		},
			function () {
				showNotification('danger', 'Sorry! unable to load app');
			});






	/**
	 * 
	 * @param {String} status   	Status of the notification
	 * @param {String} message  	Custom notification message 
	 */
	function showNotification(status, message) {
		client.interface.trigger("showNotify", {
			type: `${status}`,
			message: `${message}`
		})
	}

	/**
	 * Function to clear all input values after ticket creation
	 */
	function clearInputfields() {		
		$('#title').val('');				
		$('#desc').val('');					
		$('#email').val('');
	}
});
