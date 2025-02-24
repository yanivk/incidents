export function isKeyValid<T>(obj: T, key: keyof T) {
  if (typeof obj === 'object') {
    return Object.hasOwn(obj, key) && obj[key] !== undefined && obj[key] !== null && obj[key] !== '';
  }
  return false;
}