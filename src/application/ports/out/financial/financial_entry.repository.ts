import { FinancialMovement } from 'src/domain/financial/financial-moviment.domain';
import { Repository } from 'src/domain/types/repository';

export abstract class FinancialEntryRepository extends Repository<FinancialMovement> {}
