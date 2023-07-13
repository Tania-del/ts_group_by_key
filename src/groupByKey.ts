// import * as books from './books.json';
// import * as students from './students.json';

type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[] = [], key: keyof T): object {
  const groupedItems: GroupsMap<T> = {};

  for (let i = 0; i < items?.length; i += 1) {
    const item = items[i];
    const itemValue = item[key] as unknown as string;

    if (groupedItems[itemValue]) {
      groupedItems[itemValue].push(item);
    } else {
      groupedItems[itemValue] = [item];
    }
  }

  return groupedItems;
}
