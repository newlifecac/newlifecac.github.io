var correctPassword = '153'; //
var userPassword = prompt('密码:');

if (userPassword !== correctPassword) {
    alert('密码不正确!');
    window.location.href = '/'; // Redirects to home page if the password is wrong
}