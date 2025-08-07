export function generateCalendarDates(year, month) {
  const result = [];

  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);

  const startDay = firstDayOfMonth.getDay(); 
  const totalDays = lastDayOfMonth.getDate();

  const prevMonthLastDate = new Date(year, month, 0).getDate();
  for (let i = startDay - 1; i >= 0; i--) {
    const date = new Date(year, month - 1, prevMonthLastDate - i);
    result.push({
      date,
      isCurrentMonth: false,
    });
  }

  for (let i = 1; i <= totalDays; i++) {
    const date = new Date(year, month, i);
    result.push({
      date,
      isCurrentMonth: true,
    });
  }

  while (result.length % 7 !== 0) {
    const lastDate = result[result.length - 1].date;
    const nextDate = new Date(lastDate);
    nextDate.setDate(lastDate.getDate() + 1);
    result.push({
      date: nextDate,
      isCurrentMonth: false,
    });
  }

  return result;
}
