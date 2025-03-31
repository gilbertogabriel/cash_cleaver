import { FinancialMovement } from 'src/domain/financial/financial-moviment.domain';
import { UnitPresenter } from 'src/mapper/mapper';

export type FinancialEntryPresenter = UnitPresenter<FinancialMovement>;
