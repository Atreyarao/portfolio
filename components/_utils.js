export function getMyWorkExp() {
  const startDate = new Date(2021, 5); // December is month 11 (0-based index)
  const today = new Date();

  let years = today.getFullYear() - startDate.getFullYear();
  const hasMonthPassed = today.getMonth() >= startDate.getMonth();

  // If current month is before December, subtract 1 from years
  if (!hasMonthPassed) {
    years -= 1;
  }

  return `${years}+`;
}