"use strict";
// import * as books from './books.json';
// import * as students from './students.json';
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupByKey = void 0;
function groupByKey(items = [], key) {
    const groupedItems = {};
    for (let i = 0; i < (items === null || items === void 0 ? void 0 : items.length); i += 1) {
        const item = items[i];
        const itemValue = item[key];
        if (groupedItems[itemValue]) {
            groupedItems[itemValue].push(item);
        }
        else {
            groupedItems[itemValue] = [item];
        }
    }
    return groupedItems;
}
exports.groupByKey = groupByKey;
