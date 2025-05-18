interface ICreateCategoryCommand {
  name: string;
  description?: string;
}
export class CreateCategoryCommand {
  private readonly _name: string;
  private readonly _description?: string;

  constructor(props: ICreateCategoryCommand) {
    this._name = props.name;
    this._description = props.description;
  }

  get name(): string {
    return this._name;
  }
  
  get description(): string | undefined {
    return this._description;
  }

  get values(): ICreateCategoryCommand {
    return {
      name: this._name,
      description: this._description,
    };
  }
}
