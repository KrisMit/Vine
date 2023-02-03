export function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}
export function validatePhone(phone) {
  if (phone) {
    const re = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    return re.test(phone);
  }
  return true;
}
export function validateName(name) {
  return name.length > 1;
}
