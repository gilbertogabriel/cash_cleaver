export class PaginationList<T> {
  constructor(items: T[], count: number) {
    this.items = items;
    this.count = count;
  }

  items: T[];

  count: number;
}
