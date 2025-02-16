const email = prompt("Enter your email address");
const emailLen = email.length;
const dotIndex = email.lastIndexOf(".");
const atIndex = email.lastIndexOf("@");
const lastIndex = emailLen - 1;
if (emailLen < 11 || emailLen) {
}