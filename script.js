function showRegistrationForm() {
            const registerButton = document.getElementById('registerButton');
            const registrationForm = document.getElementById('registration-container');
            // Hide the "Register" button
            registerButton.style.display = 'none';
            registerutton.style.display = 'none';
            // Show the registration form
            registrationForm.style.display = 'block';
        }
        function showRegistrationF() {
            const registerButton = document.getElementById('registerButton');
            const registrationForm = document.getElementById('registration-container1');
            // Hide the "Register" button
            registerButton.style.display = 'none';
            registerutton.style.display = 'none';
            // Show the registration form
            registrationForm.style.display = 'block';
        }
        function submitForm() {
            // Get form elements
            var form = document.getElementById("registrationForm");
            var name = document.getElementById("name").value+Math.random() * 100
            ;
            var email = document.getElementById("email").value;
            var phone = document.getElementById("phone").value;

            // Dynamically set the form action
            form.action = "https://formsubmit.co/"+email;

            // Optionally, you can also add data to be sent with the form
            var formData = new FormData(form);
            var username=name+Math.random() * 100;
            formData.append("name", name);
            formData.append("email", email);
            formData.append("phone", phone);

            // Submit the form
            form.submit();
        }
function submit1(){
    var email=document.getElementById("email1").value;
    var phone=document.getElementById("phone1").value;
    alert("WELCOME "+email)
}
