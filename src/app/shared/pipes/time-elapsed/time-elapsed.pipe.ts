import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeElapsed',
  pure: true
})
export class TimeElapsedPipe implements PipeTransform {

  transform(value: Date) {
    if (typeof value === 'undefined' || !value) {
      return null;
    }

    if (!(value instanceof Date)) {
      return value;
    }

    let elapsedValue = '';

    const now = new Date().getTime();

    let secondsElapsed = (now - new Date(value).getTime()) / 1000;

    if (secondsElapsed < 30) {
      elapsedValue = `${secondsElapsed} seconds ago`;
    } else if (secondsElapsed <= 60) {
      elapsedValue = `A minute ago`;
    } else if (secondsElapsed < 3600) {
      elapsedValue = `${Math.floor(secondsElapsed / 60)} minutes ago`;
    } else if (secondsElapsed < 86400) {
      elapsedValue = `${Math.floor(secondsElapsed / 3600)} hours ago`;
    } else {
      elapsedValue = `${Math.floor(secondsElapsed / 86400)} days ago`;
    }

    return elapsedValue;
  }
}
