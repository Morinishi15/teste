import '@testing-library/jest-dom/extend-expect';
import {
  formatClockTime,
  remainingTimeInMinutes,
  remainingTimeInSeconds,
} from './helpers';

describe('formatClockTime', () => {
  it('should add a zero before the single character', () => {
    expect(formatClockTime(6)).toBe("06");
  });
  it('should return exactly the same number passed as parameter', () => {
    expect(formatClockTime(12)).toBe("12");
  });
});

describe('remainingTimeInMinutes', () => {
  const seconds = 120;
  it(`should return "02" minutes (${seconds} seconds divided by 60)`, () => {
    expect(remainingTimeInMinutes(seconds)).toEqual("02");
  });
  it(`should return "00" minutes (0 seconds divided by 60)`, () => {
    expect(remainingTimeInMinutes(0)).toEqual("00");
  });
});

describe('remainingTimeInSeconds', () => {
  it('should return "01" seconds (the rest of division by 60)', () => {
    const seconds = 61;
    expect(remainingTimeInSeconds(seconds)).toEqual("01");
  });
  it('should return "00" seconds (the rest of 0 divided by 60)', () => {
    expect(remainingTimeInSeconds(0)).toEqual("00");
  });
});
