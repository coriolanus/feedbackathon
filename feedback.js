window.onload = function() {
	//alert("Loaded!");

}

function send_feedback() {
	// Step 0: Assemble body of email
	var env = get_environment_details();
	var details = get_form_details();

	var subject = "Feedback for your website...";
	var content = "Category: " + details['feed']
				  + "\n\nMessage: " + details['comment'] 
				  + "\n\nUser Agent: " + env['userAgent'] + "\nTimestamp: " + env['timestamp']

	//window.open('mailto:ikhaliq42@gmail.com?subject=' + subject + '&body=' + encodeURIComponent(content));
	
	// Step 1: Craft link
	var href = 'mailto:ikhaliq42@gmail.com?subject=' + subject + '&body=' + encodeURIComponent(content);
	var mailToLink = document.getElementById("mailToLink");
	mailToLink.href = href;
	mailToLink.click();
	
	
	// Step 2: Click it!
}

function get_environment_details() {
	return {
		"userAgent": navigator.userAgent,
		"timestamp": new Date()
	}
}

function get_form_details() {
	var feed = $('input[name="feed"]:checked').parent('label').text();
	var comment = $('#comment').val();
	return {
		"feed": feed,
		"comment": comment
	}
}

function toggle_feedback() {
	$('#container').toggleClass('visible');
}
