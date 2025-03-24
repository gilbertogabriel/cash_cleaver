import { CategoryID } from '../category/category.domain';
import { AggregateRoot } from '../types/aggregate-root';
import { ResultOrError } from '../types/error/error';
import { Identifier } from '../types/identifier';
import { DateVO } from '../types/value-objects/date.vo';
import { MonthVO } from '../types/value-objects/month.vo';

interface FinancialEntryProps {
  name: string;
  description?: string;
  price: number;
  mouth_reference: MonthVO;
  category: CategoryID;
  createdAt: DateVO;
  updatedAt: DateVO;
}

type createFinancialEntryProps = Omit<
  FinancialEntryProps,
  'createdAt' | 'updatedAt'
>;
export class FinancialEntryID extends Identifier<string> {}

export class FinancialEntry extends AggregateRoot<
  FinancialEntryID,
  FinancialEntryProps
> {
  validate(): ResultOrError<void> {
    if (this.props.price < 0) throw new Error('Method not implemented.');
  }

  static create(props: createFinancialEntryProps): FinancialEntry {
    return new FinancialEntry({
      ...props,
      createdAt: DateVO.create(),
      updatedAt: DateVO.create(),
    });
  }
}
