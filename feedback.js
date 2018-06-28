window.onload = function() {
	//alert("Loaded!");

}:

function send_feedback() {
	// Step 1: Craft link
	var env = get_environment_details();
	var form = get_form_details();

	var subject = "Feedback from XXXX";
	var content = env + form;

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