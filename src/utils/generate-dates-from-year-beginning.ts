import daysjs from 'dayjs';

function generateDatesFromYearBeginning() {
  const firstDayOfTheYear = daysjs().startOf('year');
  const today = new Date();

  const dates = [];
  let compareDate = firstDayOfTheYear;

  while (compareDate.isBefore(today)) {
    dates.push(compareDate.toDate());
    compareDate = compareDate.add(1, 'day');
  }

  return dates;
}

export { generateDatesFromYearBeginning };
