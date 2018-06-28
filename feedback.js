window.onload = function() {
	//alert("Loaded!");

}

function send_feedback() {
	// Step 1: Craft link
	var env = get_environment_details();
	var details = get_form_details();

	var subject = "Feedback from XXXX";
	var content = "User Agent: " + env['userAgent'] + "\nTimesstamp: " + env['timestamp']
				  + "\n\nMessage:\n" + details['comment'];

	window.open('mailto:ikhaliq42@gmail.com?subject=' + subject + '&body=' + encodeURIComponent(content));
	// Step 2: Click it!
}

function get_environment_details() {
	return {
		"userAgent": navigator.userAgent,
		"timestamp": new Date()
	}
}

function get_form_details() {
	var comment = $('#comment').val();
	return {
		"comment": comment
	}
}
