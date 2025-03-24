import { Injectable } from '@nestjs/common';
import { CreateCategoryCommand } from 'src/application/ports/in/category/commands/create-category.command';
import { CreateCategoryUseCase } from 'src/application/ports/in/category/use-cases/create-category.use-case';
import { Category } from 'src/domain/category/category.domain';
import { ResultOrError } from 'src/domain/types/error/error';

@Injectable()
export class CreateCategoryService implements CreateCategoryUseCase {
  async execute(dto: CreateCategoryCommand): Promise<ResultOrError<Category>> {
    const categoryOrError = Category.create(dto);

    return categoryOrError;
  }
}
