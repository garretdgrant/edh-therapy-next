export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^\+?[\d\s\-().]{7,}$/;
  return phoneRegex.test(phone.trim());
}
