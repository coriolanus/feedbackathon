window.onload = function() {
	//alert("Loaded!");

}

function send_feedback() {
	// Step 0: Assemble body of email
	var env = get_environment_details();
	var form = get_form_details();

	var subject = "Feedback on APPNAME";
	var content = env + form;
	
	// Step 1: Craft link
	var href = "mailto://" + contact + "?subject=" + subject + "&body=" + content;
	
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

function toggle_feedback() {
	$('#container').toggleClass('visible');
}
