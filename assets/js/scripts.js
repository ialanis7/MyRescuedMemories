function SendMail() {
	var params = {
		from_name: document.getElementById("fullName").value,
		email_id: document.getElementById("email").value,
		message: document.getElementById("message").value
	}
	emailjs.send("service_prp5r5m", "template_oz733qo", params).then (function (response) {
		alert("Success! " + response.status);
	})
}