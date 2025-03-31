import { CategoryID } from '../category/category.domain';
import { AggregateRoot } from '../types/aggregate-root';
import { FinancialMovementTypeEnum } from '../types/enums/financial-movement-type.enum';
import { ResultOrError } from '../types/error/error';
import { Identifier } from '../types/identifier';
import { DateVO } from '../types/value-objects/date.vo';
import { MonthVO } from '../types/value-objects/month.vo';

interface FinancialMovementProps {
  name: string;
  description?: string;
  price: number;
  type: FinancialMovementTypeEnum;
  mouthReference: MonthVO;
  category: CategoryID;
  createdAt: DateVO;
  updatedAt: DateVO;
}

type createFinancialMovementProps = Omit<
  FinancialMovementProps,
  'createdAt' | 'updatedAt'
>;
export class FinancialMovementID extends Identifier<string> {}

export class FinancialMovement extends AggregateRoot<
  FinancialMovementID,
  FinancialMovementProps
> {
  validate(): ResultOrError<void> {
    if (this.props.price < 0) throw new Error('Method not implemented.');
  }

  static create(props: createFinancialMovementProps): FinancialMovement {
    return new FinancialMovement({
      ...props,
      createdAt: DateVO.create(),
      updatedAt: DateVO.create(),
    });
  }
}
