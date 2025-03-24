import { CategoryID } from 'src/domain/category/category.domain';

interface ICreateFinancialEntryCommand {
  name: string;
  description?: string;
  price: number;
  mouth_reference: string;
  year: number;
  category: CategoryID;
}
export class CreateFinancialEntryCommand {
  private readonly _name: string;
  private readonly _description?: string;
  private readonly _price: number;
  private readonly _mouth_reference: string;
  private readonly _year: number;
  private readonly _category: CategoryID;

  constructor(props: ICreateFinancialEntryCommand) {
    this._name = props.name;
    this._description = props.description;
    this._price = props.price;
    this._mouth_reference = props.mouth_reference;
    this._year = props.year;
    this._category = props.category;
  }

  get name(): string {
    return this._name;
  }

  get description(): string | undefined {
    return this._description;
  }

  get price(): number {
    return this._price;
  }

  get mouth_reference(): string {
    return this._mouth_reference;
  }

  get year(): number {
    return this._year;
  }

  get category(): CategoryID {
    return this._category;
  }

  get values(): ICreateFinancialEntryCommand {
    return {
      name: this._name,
      description: this._description,
      price: this._price,
      mouth_reference: this._mouth_reference,
      year: this._year,
      category: this._category,
    };
  }
}
