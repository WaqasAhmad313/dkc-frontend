export function formatDate(dateString: string): string {
  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(dateString));
}

export function formatDateLong(dateString: string): string {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(dateString));
}

export function getMonthsSince(dateString: string): number {
  const start = new Date(dateString);
  const now = new Date();
  return (
    (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth())
  );
}

export function isRetentionMet(startDate: string, requiredMonths: number): boolean {
  return getMonthsSince(startDate) >= requiredMonths;
}
