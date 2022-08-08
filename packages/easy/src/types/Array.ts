import { isArray, isDefined } from './Is';
import { Json } from './Json';

export type ArrayLike<T> = (T | T[])[];

export const toArray = <T>(...items: ArrayLike<T>): T[] =>
  items.length > 1 ? (items as T[]) : isArray(items[0]) ? items[0] : isDefined(items[0]) ? [items[0]] : [];

export const toObject = <T>(key: keyof T, ...items: ArrayLike<T>): Json =>
  toArray(...items).reduce((o: any, i) => {
    o[i[key]] = i;
    return o;
  }, {});

export const array = {
  merge: (first: any[] = [], second: any[] = [], firstKey = 'id', secondKey = 'id'): any[] =>
    first.map(f => ({
      ...f,
      ...second.find(s => isDefined(s[secondKey]) && isDefined(f[firstKey]) && s[secondKey] === f[firstKey]),
    })),
};
