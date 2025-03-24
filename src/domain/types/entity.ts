import { EntityPresenter, Mapper } from 'src/mapper/mapper';
import { ZodType } from 'zod/lib/types';
import { ResultOrError } from './error/error';
import {
  ApplicationErrorEnum,
  ApplicationException,
} from './error/generic-type-error';
import { Identifier } from './identifier';

const isEntity = (v: any): v is Entity<any, any> => {
  return v instanceof Entity;
};

export type EntityIdentityValue<T> =
  T extends Entity<infer I, any>
    ? I extends Identifier<infer Z>
      ? Z
      : never
    : never;

export abstract class Entity<I extends Identifier<Z>, T, Z = any> {
  protected readonly props: T;

  constructor(props: T, id?: I) {
    this.props = props;
    this._id = id;
  }

  protected _id?: I;

  get id(): I {
    return this._id!;
  }

  set id(value: I) {
    this._id = value;
  }

  get persisted() {
    return !!this._id;
  }

  static validate(
    entity: Entity<any, any>,
    validator: ZodType,
  ): ResultOrError<void> {
    const err = validator.safeParse(entity.props);
    if (!err.success)
      return ApplicationException.with(
        err.error.toString(),
        ApplicationErrorEnum.InfrastructureError,
      );
  }

  public equals(object?: Entity<I, T>): boolean {
    if (object === null || object === undefined) {
      return false;
    }

    if (this === object) {
      return true;
    }

    if (!isEntity(object)) {
      return false;
    }

    if (!this._id) {
      return false;
    }

    return this.id === object.id;
  }

  public getProps(): T {
    return this.props;
  }

  abstract validate(): ResultOrError<void>;

  toPresenter(): EntityPresenter<Entity<I, T>> {
    return Mapper.toPresenter(this) as EntityPresenter<Entity<I, T>>;
  }
}
