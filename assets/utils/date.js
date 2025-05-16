const date = {};

const DAYS_IN_MILLISECONDS = 1000 * 60 * 60 * 24;

date.diff_days = function (date, compare_date = new Date()) {
  date = new Date(date);
  const milliseconds_diff = compare_date - date;
  return Number.parseInt(milliseconds_diff / DAYS_IN_MILLISECONDS);
}