import { FinancialEntry } from 'src/domain/financial/financial_entry.domain';
import { Repository } from 'src/domain/types/repository';

export abstract class FinancialEntryRepository extends Repository<FinancialEntry> {}
