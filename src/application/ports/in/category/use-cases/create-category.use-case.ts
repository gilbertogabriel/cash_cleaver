import { Category } from 'src/domain/category/category.domain';
import { ResultOrError } from 'src/domain/types/error/error';
import { CreateCategoryCommand } from '../commands/create-category.command';

export abstract class CreateCategoryUseCase {
  abstract execute(
    dto: CreateCategoryCommand,
  ): Promise<ResultOrError<Category>>;
}
