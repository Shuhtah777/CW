import { initForm } from './counter.js';
//import './style.css';


initForm();

// Экспортируем элементы формы для тестов
export const emailInput = document.getElementById('email');
export const passwordInput = document.getElementById('password');
export const confirmPasswordInput = document.getElementById('confirmPassword');
export const agreeCheckbox = document.getElementById('agree');
export const submitButton = document.getElementById('submitButton');
export const emailError = document.getElementById('emailError');
export const passwordError = document.getElementById('passwordError');
export const confirmPasswordError = document.getElementById('confirmPasswordError');
export const agreeError = document.getElementById('agreeError');
