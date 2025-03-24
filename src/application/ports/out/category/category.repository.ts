import { Category } from 'src/domain/category/category.domain';
import { Repository } from 'src/domain/types/repository';

export abstract class CategoryRepository extends Repository<Category> {}
