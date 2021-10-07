import dayjs from 'dayjs';
import { EN, RU } from './constants';

require('dayjs/locale/ru');

export function getFormattedDate(date, language) {
  if (language === RU) {
    dayjs.locale(RU);
  } else {
    dayjs.locale(EN);
  }

  const formatDate = dayjs(date).format('ddd MMM DD YYYY');

  return formatDate;
}
