export function initForm() {
    const form = document.getElementById('registrationForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const agreeCheckbox = document.getElementById('agree');
    const submitButton = document.getElementById('submitButton');

    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');
    const agreeError = document.getElementById('agreeError');

    const togglePassword = document.getElementById('togglePassword');
    const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    function validatePassword(password) {
        const hasUpperCase = /[A-Z]/.test(password);
        const hasNumber = /\d/.test(password);
        return password.length >= 5 && hasUpperCase && hasNumber;
    }

    function validateForm() {
        let isValid = true;

        // Validate email
        if (!validateEmail(emailInput.value)) {
            emailError.textContent = 'Введіть коректний e-mail';
            emailError.classList.add('show');
            isValid = false;
        } else {
            emailError.classList.remove('show');
        }

        // Validate password
        if (!validatePassword(passwordInput.value)) {
            passwordError.textContent = 'Вимоги: 5 символів, велика літера, число.';
            passwordError.classList.add('show');
            isValid = false;
        } else {
            passwordError.classList.remove('show');
        }

        // Validate confirm password
        if (passwordInput.value !== confirmPasswordInput.value) {
            confirmPasswordError.textContent = 'Паролі не співпадають';
            confirmPasswordError.classList.add('show');
            isValid = false;
        } else {
            confirmPasswordError.classList.remove('show');
        }

        // Validate agreement
        if (!agreeCheckbox.checked) {
            agreeError.textContent = 'Ви повинні погодитись з умовами ліцензійної угоди';
            agreeError.classList.add('show');
            isValid = false;
        } else {
            agreeError.classList.remove('show');
        }

        // Enable or disable submit button
        submitButton.disabled = !isValid;

        return isValid;
    }

    emailInput.addEventListener('blur', validateForm);
    passwordInput.addEventListener('blur', validateForm);
    confirmPasswordInput.addEventListener('blur', validateForm);
    agreeCheckbox.addEventListener('change', validateForm);

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Забороняємо стандартну відправку форми

        if (validateForm()) {
            // Показуємо повідомлення про успішну реєстрацію
            alert('Реєстрація успішно завершена!');
            // Очищаємо форму після успішної реєстрації
            form.reset();
            // Вимикаємо кнопку після відправки
            submitButton.disabled = true;
        }
    });

    // Toggle password visibility
    togglePassword.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        passwordInput.classList.toggle('password-visible', type === 'text');
        togglePassword.textContent = type === 'password' ? '🙈' : '🐵';
    });

    toggleConfirmPassword.addEventListener('click', function() {
        const type = confirmPasswordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        confirmPasswordInput.setAttribute('type', type);
        confirmPasswordInput.classList.toggle('password-visible', type === 'text');
        toggleConfirmPassword.textContent = type === 'password' ? '🙈' : '🐵';
    });
}