$(function() {

	var form = $('#contact-form');

	var formMessages = $('.ajax-response');

	$(form).submit(function(e) {
		e.preventDefault();

		// Serialize the form data.
		var formData = $(form).serialize();

		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			// Make sure that the formMessages div has the 'success' class.
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');

			// Set the message text.
			$(formMessages).text(response);

			$('#contact-form input,#contact-form textarea').val('');
		})
		.fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');

			// Set the message text.
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Oops! An error occured and your message could not be sent.');
			}
		});
	});

});
function ajaxLogin() {
	$(".error").text("");
	$('#email-info').removeClass("error");
	$('#password-info').removeClass("error");

	var emailId = $('#login-username').val();
	var password = $('#login-password').val();
	var actionString = 'login';

	if (username == "") {
		$('#username-info').addClass("error");
		$(".error").text("required");
	} else if (!userName(username)) {
		$('#email-info').addClass("error");
		$('.error').text("Invalid");
	} else if (password == "") {
		$('#password-info').addClass("error");
		$(".error").text("required");
	} else {
		// show loader
		$('#loaderId').show();
		$.ajax({
			url : 'login.html',
			type : 'POST',
			data : {
				userName : userName,
				password : password,
				action : actionString
			},
			success : function(response) {
				if (response.trim() == 'error') {
					$('#login-success-message').hide();
					$('#ajaxloader').hide();
					$('#login-error-message').html(
							"Invalid Attempt. Try Again.");
					$('#login-error-message').show();
				} else {
					$('.demo-container').html(response);
					//register_window.dialog("close");
					$("#login-dialog").dialog("close");
				}
			}
		});
		this.close();
	}// endif
}

