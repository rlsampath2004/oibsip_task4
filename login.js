const loginForm = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Perform authentication logic here (e.g., check against a database)
    const validCredentials = (username === 'admin' && password === 'password'); // Replace with your actual authentication logic

    if (validCredentials) {
        // Redirect to the protected page
        alert('Logged in');
    } else {
        errorMessage.textContent = 'Invalid username or password.';
    }
});