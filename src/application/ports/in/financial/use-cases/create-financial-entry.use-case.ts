import { FinancialMovement } from 'src/domain/financial/financial-moviment.domain';
import { UseCase } from 'src/domain/types/use-case';
import { CreateFinancialEntryCommand } from '../commands/create-financial-entry.command';

export abstract class CreateFinancialEntryUseCase extends UseCase<
  CreateFinancialEntryCommand,
  FinancialMovement
> {}
