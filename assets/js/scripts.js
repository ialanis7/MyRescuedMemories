function SendMail() {
	var params = {
		from_name: document.getElementById("fullName").value,
		email_id: document.getElementById("email").value,
		message: document.getElementById("message").value
	}
	emailjs.send("service_prp5r5m", "template_oz733qo", params).then (function (response) {
		Swal.fire({
			icon: "success",
			title: "We will get back to you shortly, Thank you for reaching out."
		});
		document.getElementById("fullName").value='';
		document.getElementById("email").value='';
		document.getElementById("message").value='';
	})
}