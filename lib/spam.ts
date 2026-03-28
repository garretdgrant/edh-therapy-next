export function isSpamHoneypot(value?: string | null): boolean {
  return Boolean(value && value.trim() !== "");
}
