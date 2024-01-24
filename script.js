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
            var name = document.getElementById("name").value;
            var email = document.getElementById("email").value;
            var phone = document.getElementById("phone").value;

            // Dynamically set the form action
            form.action = "https://formsubmit.co/"+email;

            // Optionally, you can also add data to be sent with the form
            var formData = new FormData(form);
            formData.append("name", name);
            formData.append("email", email);
            formData.append("phone", phone);
            // Submit the form
            form.submit();
        }
        const scriptURL = 'https://script.google.com/macros/s/AKfycbwmqZLeZxI1oWDeVASRHc1pKuuBjWsYY9qboMIN04QjJ0qz9WCgl7poPS8fMDPW2jndXQ/exec'
        const form = document.forms['registrationForm']
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => console.log('Success!', response))
            .catch(error => console.error('Error!', error.message))
        })