document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    const fullNameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const passwordInput = document.getElementById('password');
    const successMessage = document.getElementById('successMessage');

    function validateFullName() {
        const fullNameRegex = /^[a-zA-Z\s]+$/; 
        const fullNameInput = document.getElementById('fullNameInput'); 
    
        if (!fullNameRegex.test(fullNameInput.value)) { 
            document.getElementById('fullNameError').textContent = 'Invalid full name.';
            fullNameInput.style.borderColor = 'red';
            return false;
        } else {
            document.getElementById('fullNameError').textContent = ''; 
            fullNameInput.style.borderColor = ''; 
            return true; 
        }

    function validateEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            document.getElementById('emailError').textContent = 'Invalid email address.';
            emailInput.style.borderColor = 'red';
            return false;
        } else {
            document.getElementById('emailError').textContent = '';
            emailInput.style.borderColor = '';
            return true;
        }
    }

    function validatePhone() {
        const phoneRegex = /^\d{10,15}$/;
        if (!phoneRegex.test(phoneInput.value)) {
            document.getElementById('phoneError').textContent = 'Invalid phone number.';
            phoneInput.style.borderColor = 'red';
            return false;
        } else {
            document.getElementById('phoneError').textContent = '';
            phoneInput.style.borderColor = '';
            return true;
        }
    }

    function validatePassword() {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        if (!passwordRegex.test(passwordInput.value)) {
            document.getElementById('passwordError').textContent = 'Password must be at least 8 characters with one uppercase, one lowercase, and one number.';
            passwordInput.style.borderColor = 'red';
            return false;
        } else {
            document.getElementById('passwordError').textContent = '';
            passwordInput.style.borderColor = '';
            return true;
        }
    }

    //Real time validation
    fullNameInput.addEventListener('input', validateFullName);
    emailInput.addEventListener('input', validateEmail);
    phoneInput.addEventListener('input', validatePhone);
    passwordInput.addEventListener('input', validatePassword);

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const isFullNameValid = validateFullName();
        const isEmailValid = validateEmail();
        const isPhoneValid = validatePhone();
        const isPasswordValid = validatePassword();

        if (isFullNameValid && isEmailValid && isPhoneValid && isPasswordValid) {
            successMessage.style.display = 'block';
        } else {
            successMessage.style.display = 'none';
        }
    });
}});