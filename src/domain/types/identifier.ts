import { z } from 'zod';
import { ValueObject } from './value-objects/value-object';

export abstract class Identifier<T> extends ValueObject<{
  _value: T;
}> {
  constructor(id: T) {
    super({
      _value: id,
    });
  }

  static get validator() {
    return z.object({
      _value: z.any(),
    });
  }

  get value(): T {
    return this.props._value;
  }

  equals(id: Identifier<T>): boolean {
    if (id === null || id === undefined) {
      return false;
    }

    if (!(id instanceof this.constructor)) {
      return false;
    }

    return id.value === this.value;
  }
}
