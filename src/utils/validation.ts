export const luhnCheck = (cardNumber: string): boolean => {
  const cleaned = cardNumber.replace(/[\s-]/g, "");
  let sum = 0;
  let shouldDouble = false;

  for (let i = cleaned.length - 1; i >= 0; i--) {
    let digit = parseInt(cleaned[i], 10);
    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return sum % 10 === 0;
};

export const notInThePast = (date: string): boolean => {
  const [monthStr, yearStr] = date.split("/");
  const month = parseInt(monthStr, 10);
  const year = parseInt(`20${yearStr}`, 10);

  if (isNaN(month) || isNaN(year)) return false;

  const now = new Date();
  const expDate = new Date(year, month - 1, 1);
  expDate.setMonth(expDate.getMonth() + 1); // Set to the end of the month

  return expDate > now;
};
