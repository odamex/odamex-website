export function sanitizeForLog(input: unknown): string {
    if (input == null) return '';
    return String(input)
        .replace(/[\r\n]+/g, ' ') // CRLF injection
        .replace(/[\x00-\x08\x0B-\x1F\x7F]+/g, ''); // other control chars
}
