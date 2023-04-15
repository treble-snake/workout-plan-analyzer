import {QtyRange} from '../../../types/workout';

const RANGE_REGEX = /^[\d\-]+$/;

export const emptyRange = () => ({from: 0, to: 0});

export const rangeToText = (range: QtyRange) => range.from === range.to ?
  String(range.from) :
  `${range.from}-${range.to}`;

const parseRange = (text: string) => {
  const parts = text.split('-');
  const range = {
    from: Number.parseInt(parts[0]),
    to: Number.parseInt(parts[1])
  };
  if (Number.isNaN(range.to)) {
    range.to = range.from;
  }

  return range;
};

export const isValidTextRange = (text: string) => {
  if (!RANGE_REGEX.test(text)) {
    return false;
  }

  const {from, to} = parseRange(text);
  if (from <= 0 || to <= 0) {
    return false;
  }

  if (Number.isNaN(to)) {
    return true;
  }

  return from <= to;
};

export const textToRange = (text: string) => {
  if (!isValidTextRange(text)) {
    throw new Error('Not a valid range: ' + text);
  }

  return parseRange(text);
};

export const sumRanges = (a: QtyRange, b: QtyRange): QtyRange => ({
  from: a.from + b.from,
  to: a.to + b.to
});


export const isInRange = (value: number, range: QtyRange) => {
  return value >= range.from && value <= range.to;
};