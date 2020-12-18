import { Months, Weekdays } from './text-arrays';

// Data info
const date = new Date();
export const Month = Months[date.getMonth()];
export const Weekday = Weekdays[date.getDay()];
export const Day = date.getDate();
