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
	var form = get_form_details();

	var title = getParamValue('title')
	var email = getParamValue('email')

	var subject = "Feedback on " + title;
	var content = env + form;

	// Step 1: Craft link
	//var href = "mailto://" + contact + "?subject=" + subject + "&body=" + content;

	// Step 2: Click it!
}

function get_environment_details() {
	return {
		"userAgent": navigator.userAgent,
		"href": navigator.href,
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
