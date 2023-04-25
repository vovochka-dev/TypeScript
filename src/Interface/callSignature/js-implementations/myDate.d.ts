interface MyDateConstructor {
  (): MyDate;
  new (): MyDate;
  new (dateString: string): MyDate;
  new (
    year: number,
    month: number,
    date?: number,
    hours?: number,
    minutes?: number,
    seconds?: number,
    ms?: number
  ): MyDate;
}

interface MyDate {
  toString(): string;
  // other methods/properties here
}

declare const MyDate: MyDateConstructor;
export default MyDate;
