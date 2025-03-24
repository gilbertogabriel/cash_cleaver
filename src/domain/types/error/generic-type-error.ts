export enum ApplicationErrorEnum {
  NotFound = 'NotFound',
  RequiredField = 'RequiredField',
  InvalidField = 'InvalidField',
  FieldTypeIncompatible = 'FieldTypeIncompatible',
  AlreadyExists = 'AlreadyExists',
  InfrastructureError = 'InfrastructureError',
  NotImplemented = 'NotImplemented',
  Forbidden = 'Forbidden',
  InvalidRequirement = 'InvalidRequirement',
  UnprocessableEntity = 'UnprocessableEntity',
}

export class ApplicationException extends Error {
  genericTypeError: ApplicationErrorEnum;

  private constructor(message: string, typeError: ApplicationErrorEnum) {
    super(message);
    this.genericTypeError = typeError;
  }

  get httpCode(): number {
    switch (this.genericTypeError) {
      case ApplicationErrorEnum.NotFound:
        return 404;
      case ApplicationErrorEnum.RequiredField:
        return 400;
      case ApplicationErrorEnum.InvalidField:
        return 400;
      case ApplicationErrorEnum.FieldTypeIncompatible:
        return 400;
      case ApplicationErrorEnum.AlreadyExists:
        return 409;
      case ApplicationErrorEnum.InfrastructureError:
        return 500;
      case ApplicationErrorEnum.NotImplemented:
        return 500;
      case ApplicationErrorEnum.Forbidden:
        return 403;
      case ApplicationErrorEnum.InvalidRequirement:
        return 400;
      case ApplicationErrorEnum.UnprocessableEntity:
        return 422;
    }
  }

  static with(
    message: string,
    typeError: ApplicationErrorEnum = ApplicationErrorEnum.InvalidField,
  ): ApplicationException {
    return new ApplicationException(message, typeError);
  }
}
