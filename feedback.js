window.onload = function() {
}

function getParamValue(paramName)
{
    var url = window.location.search.substring(1); //get rid of "?" in querystring
    var qArray = url.split('&'); //get key-value pairs
    for (var i = 0; i < qArray.length; i++)
    {
        var pArr = qArray[i].split('='); //split key and value
        if (pArr[0] == paramName)
            return pArr[1]; //return value
    }
}

function send_feedback() {
	// Step 0: Assemble body of email
	var env = get_environment_details();
	var details = get_form_details();

	var title = getParamValue('title')
	var email = getParamValue('email')

	// Step 1: Craft link
	var subject = "Feedback for " + title;
	var content = "Category: " + details['feed']
				  + "\n\nMessage: " + details['comment']
				  + "\n\nUser Agent: " + env['userAgent'] + "\nTimestamp: " + env['timestamp']

	// Step 1: Craft link
	var href = 'mailto:' + email + '?subject=' + subject + '&body=' + encodeURIComponent(content);
	var mailToLink = document.getElementById("mailToLink");
	mailToLink.href = href;
	mailToLink.click();
}

function get_environment_details() {
	return {
		"userAgent": navigator.userAgent,
		"href": navigator.href,
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
