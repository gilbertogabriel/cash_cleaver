import { format } from 'date-fns';
import { z } from 'zod';
import { ValueObject } from './value-object';

export type MonthVOProps = { year: number; month: number };

export class MonthVO extends ValueObject<MonthVOProps> {
  static get validator() {
    return z.object({
      props: z.object({
        year: z.number().min(1900).max(2100),
        month: z.number().min(1).max(12),
      }),
    });
  }

  get year(): number {
    return this.props.year;
  }

  get month(): number {
    return this.props.month;
  }

  public static create(): MonthVO;

  public static create(year: number, month: number): MonthVO;

  public static create(date: string): MonthVO;

  public static create(yearOrDate?: number | string, month?: number): MonthVO {
    if (typeof yearOrDate === 'undefined') {
      const now = new Date();
      return new MonthVO({
        year: now.getFullYear(),
        month: now.getMonth() + 1,
      });
    }

    if (typeof yearOrDate === 'string') {
      const [month, year] = yearOrDate.split('/').map(Number);

      if (month && year) return new MonthVO({ year, month });

      throw new Error('Invalid date string format. Expected format: MM/YYYY');
    }

    if (typeof yearOrDate === 'number' && typeof month === 'number') {
      return new MonthVO({ year: yearOrDate, month });
    }

    throw new Error('Invalid arguments for MonthVO creation');
  }

  public toString(): string {
    return format(new Date(this.year, this.month - 1), 'MM/yyyy');
  }

  equals(vo: MonthVO): boolean {
    return this.year === vo.year && this.month === vo.month;
  }

  public isBefore(monthVO = MonthVO.create()): boolean {
    const thisDate = new Date(this.year, this.month - 1);
    const otherDate = new Date(monthVO.year, monthVO.month - 1);
    return thisDate < otherDate;
  }
}
