import { addHours, format } from 'date-fns';
import { z } from 'zod';
import { ValueObject } from './value-object';

export type dateVOProps = Date;

export class DateVO extends ValueObject<dateVOProps> {
  static get validator() {
    return z.object({
      props: z.date(),
    });
  }

  get date(): Date {
    return this.props;
  }

  public static create(): DateVO;

  public static create(date: Date): DateVO;

  public static create(date: string): DateVO;

  public static create(date?: Date | string): DateVO {
    if (!date) return new DateVO(new Date());

    if (typeof date === 'string') {
      const [day, month, year] = date.split('/').map(Number);

      if (day && month && year)
        return new DateVO(new Date(year, month - 1, day));

      return new DateVO(new Date(date));
    }

    return new DateVO(date);
  }

  public getDate(): Date {
    return this.date;
  }

  public toString(data?: {
    resumedYear?: boolean;
    withTime?: boolean;
  }): string {
    let dateFormat = 'dd/MM/yy';

    if (!data?.resumedYear) dateFormat = 'dd/MM/yyyy';
    if (data?.withTime) dateFormat += ' HH:mm';
    return format(addHours(this.date, 3), dateFormat);
  }

  equals(vo: DateVO): boolean {
    return this.date.getTime() === vo.getDate().getTime();
  }

  public isBefore(date = DateVO.create()): boolean {
    return this.date < date.getDate();
  }

  public isBeforeNoTimestamp(date = DateVO.create()): boolean {
    const date1 = new Date(this.date);
    date1.setHours(0, 0, 0, 0);

    const date2 = new Date(date.getDate());
    date2.setHours(0, 0, 0, 0);
    return date1 < date2;
  }
}
