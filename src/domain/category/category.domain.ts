import { Entity } from '../types/entity';
import { ResultOrError } from '../types/error/error';
import {
  ApplicationErrorEnum,
  ApplicationException,
} from '../types/error/generic-type-error';
import { Identifier } from '../types/identifier';
import { DateVO } from '../types/value-objects/date.vo';

interface CategoryProps {
  name: string;
  description?: string;
  createdAt: DateVO;
  updatedAt: DateVO;
}
type createCategoryProps = Pick<CategoryProps, 'name' | 'description'>;

export class CategoryID extends Identifier<number> {}

export class Category extends Entity<CategoryID, CategoryProps> {
  validate(): ResultOrError<void> {
    if (this.props.name.length < 2) {
      return ApplicationException.with(
        'Category name must have at least 2 characters',
        ApplicationErrorEnum.UnprocessableEntity,
      );
    }
  }

  static create(props: createCategoryProps): Category {
    return new Category({
      ...props,
      createdAt: DateVO.create(),
      updatedAt: DateVO.create(),
    });
  }
}
