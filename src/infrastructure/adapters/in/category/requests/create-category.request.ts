import { IsOptional, IsString } from 'class-validator';
import { CreateCategoryCommand } from 'src/application/ports/in/category/commands/create-category.command';

export class CreateCategoryRequest {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  static toCommand(request: CreateCategoryRequest): CreateCategoryCommand {
    return new CreateCategoryCommand({
      name: request.name,
      description: request.description,
    });
  }
}
