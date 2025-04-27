const form = document.getElementById('registrationForm');
        const usernameInput = document.getElementById('username');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const confirmPasswordInput = document.getElementById('confirmPassword');
        const usernameError = document.getElementById('usernameError');
        const emailError = document.getElementById('emailError');
        const passwordError = document.getElementById('passwordError');
        const confirmPasswordError = document.getElementById('confirmPasswordError');

        form.addEventListener('submit', function(event) {
            let isValid = true;

            // Reset error messages
            usernameError.textContent = '';
            emailError.textContent = '';
            passwordError.textContent = '';
            confirmPasswordError.textContent = '';

            // Username validation (basic: not empty)
            if (usernameInput.value.trim() === '') {
                usernameError.textContent = 'Username is required.';
                isValid = false;
            }

            // Email validation (basic pattern check)
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value)) {
                emailError.textContent = 'Invalid email format.';
                isValid = false;
            }

            // Password validation (basic: minimum length)
            if (passwordInput.value.length < 6) {
                passwordError.textContent = 'Password must be at least 6 characters long.';
                isValid = false;
            }

            // Confirm password validation (must match password)
            if (passwordInput.value !== confirmPasswordInput.value) {
                confirmPasswordError.textContent = 'Passwords do not match.';
                isValid = false;
            }

            if (!isValid) {
                event.preventDefault(); // Prevent form submission if there are errors
            } else {
                alert('Registration successful!'); // Replace with your actual submission logic
            }
        });