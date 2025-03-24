import { NullaryUseCase } from 'src/domain/types/use-case';
import { FinancialEntryPresenter } from '../../in/financial/presenter/financial-entry.presenter';

export abstract class GetFinancialQueryHandler extends NullaryUseCase<FinancialEntryPresenter> {}
