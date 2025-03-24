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
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
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

emailInput.addEventListener('input', validateForm);
passwordInput.addEventListener('input', validateForm);
confirmPasswordInput.addEventListener('input', validateForm);
agreeCheckbox.addEventListener('change', validateForm);

form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (validateForm()) {
        alert('Реєстрація успішно завершена!');
        form.reset();
        submitButton.disabled = true;
        // Скрываем все ошибки
        emailError.classList.remove('show');
        passwordError.classList.remove('show');
        confirmPasswordError.classList.remove('show');
        agreeError.classList.remove('show');
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