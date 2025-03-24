    import './style.css';
    import { initForm } from './counter.js';

    document.querySelector('#app').innerHTML = `
    <form id="registrationForm">
            <div class="form-group">
                <label for="email">E-mail:</label>
                <input type="email" id="email" name="email" required>
                <span class="error-message" id="emailError"></span>
            </div>

            <div class="form-group">
                <label for="password">Пароль:</label>
                <div class="password-wrapper">
                    <input type="password" id="password" name="password" required>
                    <span class="toggle-password" id="togglePassword">🙈</span>
                </div>
                <span class="error-message" id="passwordError"></span>
            </div>

            <div class="form-group">
                <label for="confirmPassword">Підтвердження паролю:</label>
                <div class="password-wrapper">
                    <input type="password" id="confirmPassword" name="confirmPassword" required>
                    <span class="toggle-password" id="toggleConfirmPassword">🙈</span>
                </div>
                <span class="error-message" id="confirmPasswordError"></span>
            </div>

            <div class="form-group">
                <input type="checkbox" id="agree" name="agree">
                <label for="agree">Я згоден з умовами ліцензійної угоди</label>
                <span class="error-message" id="agreeError"></span>
            </div>

            <button type="submit" id="submitButton" disabled>Відправити</button>
        </form>
    `;

    // Инициализация формы
    initForm();