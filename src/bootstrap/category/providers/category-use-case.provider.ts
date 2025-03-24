import { CreateCategoryUseCase } from 'src/application/ports/in/category/use-cases/create-category.use-case';
import { CreateCategoryService } from 'src/application/services/category/create-category.service';

export const CategoryUseCaseProvider = [
  {
    provide: CreateCategoryUseCase,
    useClass: CreateCategoryService,
  },
];
