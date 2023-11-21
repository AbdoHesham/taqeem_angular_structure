import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormatDateAndTimeService {

  constructor() { }
  formatDate(date: Date | any): string {
    const formattedDate = new Date(date);
    const day = formattedDate.getDate().toString().padStart(2, '0');
    const month = this.getMonthName(formattedDate.getMonth());
    const year = formattedDate.getFullYear().toString();
    return `${day}-${month}-${year}`;
  }

  formatTime(date: Date | any): string {
    const formattedDate = new Date(date);
    const formattedTime = formattedDate.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
    return formattedTime;
  }
  getMonthName(month: number): string {
    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    return monthNames[month];
  }
}
