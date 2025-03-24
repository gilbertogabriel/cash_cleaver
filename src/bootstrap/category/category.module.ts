import { Global, Module } from '@nestjs/common';
import { CategoryController } from 'src/infrastructure/adapters/in/category/category.controller';
import { CategoryUseCaseProvider } from './providers/category-use-case.provider';

@Global()
@Module({
  controllers: [CategoryController],
  providers: [...CategoryUseCaseProvider],
  exports: [],
})
export class CategoryModule {}
