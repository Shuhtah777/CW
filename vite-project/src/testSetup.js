import { JSDOM } from 'jsdom';
import { initForm } from './counter.js';

const dom = new JSDOM(`<!DOCTYPE html>
<html>
  <body>
    <form id="registrationForm">
      <input id="email" type="email">
      <div id="emailError"></div>

      <input id="password" type="password">
      <div id="passwordError"></div>

      <input id="confirmPassword" type="password">
      <div id="confirmPasswordError"></div>

      <input id="agree" type="checkbox">
      <div id="agreeError"></div>

      <button id="submitButton" disabled>Submit</button>
    </form>
  </body>
</html>`);

// Используем globalThis 
globalThis.document = dom.window.document;
globalThis.window = dom.window;
globalThis.HTMLElement = dom.window.HTMLElement;
globalThis.Event = dom.window.Event;

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
