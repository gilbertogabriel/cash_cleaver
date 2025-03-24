import { Body, Controller, Post } from '@nestjs/common';
import { CreateCategoryUseCase } from 'src/application/ports/in/category/use-cases/create-category.use-case';
import { CreateCategoryRequest } from './requests/create-category.request';

@Controller('category')
export class CategoryController {
  constructor(private readonly createCategoryUseCase: CreateCategoryUseCase) {}

  @Post()
  async createCategory(@Body() dto: CreateCategoryRequest) {
    return await this.createCategoryUseCase.execute(
      CreateCategoryRequest.toCommand(dto),
    );
  }
}
