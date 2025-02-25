export function isKeyValid<T>(obj: T, key: keyof T) {
  if (typeof obj === 'object') {
    return Object.hasOwn(obj, key) && obj[key] !== undefined && obj[key] !== null && obj[key] !== '';
  }
  return false;
}

export function getStartCurrentDay() {
  const startDate = new Date();
  startDate.setHours(0, 0, 0, 0);
  return startDate;
}

export function getEndCurrentDay() {
  const endDate = new Date();
  endDate.setHours(23, 59, 59, 999);
  return endDate;
}

export function getPassedDate(daysPassed: number = 7) {
  let date = new Date();
  date.setDate(date.getDate() - daysPassed);

  return date;
}