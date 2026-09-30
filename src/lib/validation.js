const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 8;

function getEmailError(email = "") {
  if (!email.trim()) return "Please enter your email.";
  if (!EMAIL_PATTERN.test(email.trim())) return "Please enter a valid email address.";
  return "";
}

export function validateLogin({ email, password }) {
  const errors = {};
  const emailError = getEmailError(email);

  if (emailError) errors.email = emailError;
  if (!password) errors.password = "Please enter your password.";

  return errors;
}

export function validateSignup({ name = "", email, password = "" }) {
  const errors = {};
  const emailError = getEmailError(email);

  if (!name.trim()) errors.name = "Please enter your full name.";
  if (emailError) errors.email = emailError;
  if (!password) {
    errors.password = "Please create a password.";
  } else if (password.length < MIN_PASSWORD_LENGTH) {
    errors.password = `Password must be at least ${MIN_PASSWORD_LENGTH} characters.`;
  }

  return errors;
}
