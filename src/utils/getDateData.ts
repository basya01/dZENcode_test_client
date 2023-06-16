const months = [
  'Янв',
  'Фев',
  'Март',
  'Апр',
  'Май',
  'Июнь',
  'Июль',
  'Авг',
  'Сен',
  'Окт',
  'Нояб',
  'Дек',
];

const daysOfWeek = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
];

const getDateData = (dateInput: string | number) => {
  const date = new Date(dateInput);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const monthStr = months[date.getMonth()];
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const dayOfWeek = daysOfWeek[date.getDay()];

  return { day, month, year, monthStr, hours, minutes, seconds, dayOfWeek };
};

export default getDateData;
