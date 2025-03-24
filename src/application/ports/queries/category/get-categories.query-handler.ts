import { NullaryUseCase } from 'src/domain/types/use-case';
import { CategoryPresenter } from '../../in/category/presenter/category.presenter';

export abstract class GetCategoriesQueryHandler extends NullaryUseCase<CategoryPresenter> {}
