/**
 * Formats a Portuguese-style phone number for display, e.g. "+351210000000"
 * becomes "+351 21 000 00 00". Falls back to the raw value if it doesn't
 * match the expected pattern.
 */
export function formatPhoneNumber(value: string): string {
  const digits = value.replace(/[^\d+]/g, "");
  const match = digits.match(/^(\+\d{1,3})?(\d{2})(\d{3})(\d{2})(\d{2})$/);

  if (!match) return value;

  const [, countryCode, area, first, second, third] = match;
  return [countryCode, area, first, second, third].filter(Boolean).join(" ");
}

/**
 * Truncates a string to a maximum length, appending an ellipsis when needed.
 */
export function truncate(value: string, maxLength: number): string {
  if (value.length <= maxLength) return value;
  return `${value.slice(0, maxLength).trimEnd()}…`;
}
