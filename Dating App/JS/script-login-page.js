let signUpButton = document.getElementById('signUp');
let signInButton = document.getElementById('signIn');
let loginPageContainer = document.getElementById('login-page-container');

signUpButton.addEventListener('click', () =>
loginPageContainer.classList.add('right-panel-active'));

signInButton.addEventListener('click', () =>
loginPageContainer.classList.remove('right-panel-active'));

