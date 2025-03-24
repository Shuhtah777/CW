import './testSetup.js';
import { test, expect } from 'vitest';
import { 
  emailInput, passwordInput, confirmPasswordInput, 
  agreeCheckbox, submitButton, emailError, 
  passwordError, confirmPasswordError, agreeError 
} from './testSetup.js';
import './style.css';



test('валидация email: корректный email', () => {
  emailInput.value = 'test@example.com';
  emailInput.dispatchEvent(new Event('blur'));
  expect(emailError.classList.contains('show')).toBe(false);
});

test('валидация email: некорректный email', () => {
  emailInput.value = 'invalid-email';
  emailInput.dispatchEvent(new Event('blur'));
  expect(emailError.textContent).toBe('Введіть коректний e-mail');
  expect(emailError.classList.contains('show')).toBe(true);
});

test('валидация пароля: корректный пароль', () => {
  passwordInput.value = 'Strong1';
  passwordInput.dispatchEvent(new Event('blur'));
  expect(passwordError.classList.contains('show')).toBe(false);
});

test('валидация пароля: некорректный пароль', () => {
  passwordInput.value = 'weak';
  passwordInput.dispatchEvent(new Event('blur'));
  expect(passwordError.textContent).toBe('Вимоги: 5 символів, велика літера, число.');
  expect(passwordError.classList.contains('show')).toBe(true);
});

test('валидация подтверждения пароля: пароли совпадают', () => {
  passwordInput.value = 'Strong1';
  confirmPasswordInput.value = 'Strong1';
  confirmPasswordInput.dispatchEvent(new Event('blur'));
  expect(confirmPasswordError.classList.contains('show')).toBe(false);
});

test('валидация подтверждения пароля: пароли не совпадают', () => {
  passwordInput.value = 'Strong1';
  confirmPasswordInput.value = 'Wrong1';
  confirmPasswordInput.dispatchEvent(new Event('blur'));
  expect(confirmPasswordError.textContent).toBe('Паролі не співпадають');
  expect(confirmPasswordError.classList.contains('show')).toBe(true);
});

test('валидация согласия: согласие получено', () => {
  agreeCheckbox.checked = true;
  agreeCheckbox.dispatchEvent(new Event('change'));
  expect(agreeError.classList.contains('show')).toBe(false);
});

test('валидация согласия: согласие не получено', () => {
  agreeCheckbox.checked = false;
  agreeCheckbox.dispatchEvent(new Event('change'));
  expect(agreeError.textContent).toBe('Ви повинні погодитись з умовами ліцензійної угоди');
  expect(agreeError.classList.contains('show')).toBe(true);
});