var correctPassword = 'xsm'; // 
var userPassword = prompt('Please enter the password to view this post:');

if (userPassword !== correctPassword) {
    alert('Incorrect password.');
    window.location.href = '/'; // Redirects to home page if the password is wrong
}