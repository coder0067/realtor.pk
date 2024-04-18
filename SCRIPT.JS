document.addEventListener('DOMContentLoaded', function() {
    const readMoreBtn = document.getElementById('readMoreBtn');
    const additionalParagraph = document.getElementById('additionalParagraph');

    readMoreBtn.addEventListener('click', function() {
        if (additionalParagraph.classList.contains('hidden')) {
    
            additionalParagraph.classList.remove('hidden');
            readMoreBtn.textContent = 'Read Less';
        } else {
    
            additionalParagraph.classList.add('hidden');
            readMoreBtn.textContent = 'Read More';
        }
    });
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('registrationForm').addEventListener('submit', function(event) {
            event.preventDefault();
            validateForm();
        });
    });
    
    function validateForm() {
        // Clear previous error messages
        clearErrors();
    
        // Get form inputs
        var fullName = document.getElementById('fullname').value.trim();
        var lastName = document.getElementById('lastname').value.trim();
        var username = document.getElementById('username').value.trim();
        var password = document.getElementById('password').value;
        var retypePassword = document.getElementById('retypepassword').value;
        var birthDate = document.getElementById('birthdate').value;
        var address = document.getElementById('address').value.trim();
    
        // Validate Full Name
        if (fullName === '') {
            displayError('fullname', 'Full Name is required');
        }
    
        // Validate Last Name (if required)
        // Here you can add validation for Last Name if it's required
    
        // Validate Username (if required)
        // Here you can add validation for Username if it's required
    
        // Validate Password
        if (password === '') {
            displayError('password', 'Password is required');
        }
    
        // Validate Retype Password
        if (retypePassword === '') {
            displayError('retypepassword', 'Retype Password is required');
        } else if (password !== retypePassword) {
            displayError('retypepassword', 'Passwords do not match');
        }
    
        // Validate Birth Date (if required)
        // Here you can add validation for Birth Date if it's required
    
        // Validate Address (if required)
        // Here you can add validation for Address if it's required
    }
    
    function displayError(fieldId, errorMessage) {
        var errorElement = document.createElement('p');
        errorElement.className = 'error';
        errorElement.textContent = errorMessage;
        document.getElementById(fieldId).parentNode.appendChild(errorElement);
    }
    
    function clearErrors() {
        var errorMessages = document.querySelectorAll('.error');
        errorMessages.forEach(function(errorMessage) {
            errorMessage.parentNode.removeChild(errorMessage);
        });
    }
    