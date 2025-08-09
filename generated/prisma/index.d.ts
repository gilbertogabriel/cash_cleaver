
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model category
 * 
 */
export type category = $Result.DefaultSelection<Prisma.$categoryPayload>
/**
 * Model expense
 * 
 */
export type expense = $Result.DefaultSelection<Prisma.$expensePayload>
/**
 * Model recurring_expense
 * 
 */
export type recurring_expense = $Result.DefaultSelection<Prisma.$recurring_expensePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const frequency: {
  daily: 'daily',
  weekly: 'weekly',
  monthly: 'monthly',
  yearly: 'yearly',
  custom: 'custom'
};

export type frequency = (typeof frequency)[keyof typeof frequency]

}

export type frequency = $Enums.frequency

export const frequency: typeof $Enums.frequency

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.categoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.expense`: Exposes CRUD operations for the **expense** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Expenses
    * const expenses = await prisma.expense.findMany()
    * ```
    */
  get expense(): Prisma.expenseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.recurring_expense`: Exposes CRUD operations for the **recurring_expense** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Recurring_expenses
    * const recurring_expenses = await prisma.recurring_expense.findMany()
    * ```
    */
  get recurring_expense(): Prisma.recurring_expenseDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    user: 'user',
    category: 'category',
    expense: 'expense',
    recurring_expense: 'recurring_expense'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "category" | "expense" | "recurring_expense"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      category: {
        payload: Prisma.$categoryPayload<ExtArgs>
        fields: Prisma.categoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          findFirst: {
            args: Prisma.categoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          findMany: {
            args: Prisma.categoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[]
          }
          create: {
            args: Prisma.categoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          createMany: {
            args: Prisma.categoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[]
          }
          delete: {
            args: Prisma.categoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          update: {
            args: Prisma.categoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          deleteMany: {
            args: Prisma.categoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.categoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>[]
          }
          upsert: {
            args: Prisma.categoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.categoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      expense: {
        payload: Prisma.$expensePayload<ExtArgs>
        fields: Prisma.expenseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.expenseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.expenseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensePayload>
          }
          findFirst: {
            args: Prisma.expenseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.expenseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensePayload>
          }
          findMany: {
            args: Prisma.expenseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensePayload>[]
          }
          create: {
            args: Prisma.expenseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensePayload>
          }
          createMany: {
            args: Prisma.expenseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.expenseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensePayload>[]
          }
          delete: {
            args: Prisma.expenseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensePayload>
          }
          update: {
            args: Prisma.expenseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensePayload>
          }
          deleteMany: {
            args: Prisma.expenseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.expenseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.expenseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensePayload>[]
          }
          upsert: {
            args: Prisma.expenseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$expensePayload>
          }
          aggregate: {
            args: Prisma.ExpenseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExpense>
          }
          groupBy: {
            args: Prisma.expenseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExpenseGroupByOutputType>[]
          }
          count: {
            args: Prisma.expenseCountArgs<ExtArgs>
            result: $Utils.Optional<ExpenseCountAggregateOutputType> | number
          }
        }
      }
      recurring_expense: {
        payload: Prisma.$recurring_expensePayload<ExtArgs>
        fields: Prisma.recurring_expenseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.recurring_expenseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recurring_expensePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.recurring_expenseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recurring_expensePayload>
          }
          findFirst: {
            args: Prisma.recurring_expenseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recurring_expensePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.recurring_expenseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recurring_expensePayload>
          }
          findMany: {
            args: Prisma.recurring_expenseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recurring_expensePayload>[]
          }
          create: {
            args: Prisma.recurring_expenseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recurring_expensePayload>
          }
          createMany: {
            args: Prisma.recurring_expenseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.recurring_expenseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recurring_expensePayload>[]
          }
          delete: {
            args: Prisma.recurring_expenseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recurring_expensePayload>
          }
          update: {
            args: Prisma.recurring_expenseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recurring_expensePayload>
          }
          deleteMany: {
            args: Prisma.recurring_expenseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.recurring_expenseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.recurring_expenseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recurring_expensePayload>[]
          }
          upsert: {
            args: Prisma.recurring_expenseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$recurring_expensePayload>
          }
          aggregate: {
            args: Prisma.Recurring_expenseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecurring_expense>
          }
          groupBy: {
            args: Prisma.recurring_expenseGroupByArgs<ExtArgs>
            result: $Utils.Optional<Recurring_expenseGroupByOutputType>[]
          }
          count: {
            args: Prisma.recurring_expenseCountArgs<ExtArgs>
            result: $Utils.Optional<Recurring_expenseCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: userOmit
    category?: categoryOmit
    expense?: expenseOmit
    recurring_expense?: recurring_expenseOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    categories: number
    expenses: number
    recurring_expenses: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | UserCountOutputTypeCountCategoriesArgs
    expenses?: boolean | UserCountOutputTypeCountExpensesArgs
    recurring_expenses?: boolean | UserCountOutputTypeCountRecurring_expensesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: expenseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRecurring_expensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: recurring_expenseWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    expenses: number
    recurring_expenses: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    expenses?: boolean | CategoryCountOutputTypeCountExpensesArgs
    recurring_expenses?: boolean | CategoryCountOutputTypeCountRecurring_expensesArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountExpensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: expenseWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountRecurring_expensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: recurring_expenseWhereInput
  }


  /**
   * Count Type Recurring_expenseCountOutputType
   */

  export type Recurring_expenseCountOutputType = {
    generated_expenses: number
  }

  export type Recurring_expenseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    generated_expenses?: boolean | Recurring_expenseCountOutputTypeCountGenerated_expensesArgs
  }

  // Custom InputTypes
  /**
   * Recurring_expenseCountOutputType without action
   */
  export type Recurring_expenseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Recurring_expenseCountOutputType
     */
    select?: Recurring_expenseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Recurring_expenseCountOutputType without action
   */
  export type Recurring_expenseCountOutputTypeCountGenerated_expensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: expenseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password_hash: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password_hash: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password_hash: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password_hash?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password_hash?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password_hash?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string
    password_hash: string
    created_at: Date
    updated_at: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password_hash?: boolean
    created_at?: boolean
    updated_at?: boolean
    categories?: boolean | user$categoriesArgs<ExtArgs>
    expenses?: boolean | user$expensesArgs<ExtArgs>
    recurring_expenses?: boolean | user$recurring_expensesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password_hash?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password_hash?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password_hash?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password_hash" | "created_at" | "updated_at", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | user$categoriesArgs<ExtArgs>
    expenses?: boolean | user$expensesArgs<ExtArgs>
    recurring_expenses?: boolean | user$recurring_expensesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      categories: Prisma.$categoryPayload<ExtArgs>[]
      expenses: Prisma.$expensePayload<ExtArgs>[]
      recurring_expenses: Prisma.$recurring_expensePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      password_hash: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {userUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categories<T extends user$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, user$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    expenses<T extends user$expensesArgs<ExtArgs> = {}>(args?: Subset<T, user$expensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recurring_expenses<T extends user$recurring_expensesArgs<ExtArgs> = {}>(args?: Subset<T, user$recurring_expensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recurring_expensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly name: FieldRef<"user", 'String'>
    readonly password_hash: FieldRef<"user", 'String'>
    readonly created_at: FieldRef<"user", 'DateTime'>
    readonly updated_at: FieldRef<"user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.categories
   */
  export type user$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    where?: categoryWhereInput
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    cursor?: categoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * user.expenses
   */
  export type user$expensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense
     */
    omit?: expenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expenseInclude<ExtArgs> | null
    where?: expenseWhereInput
    orderBy?: expenseOrderByWithRelationInput | expenseOrderByWithRelationInput[]
    cursor?: expenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * user.recurring_expenses
   */
  export type user$recurring_expensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurring_expense
     */
    select?: recurring_expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recurring_expense
     */
    omit?: recurring_expenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recurring_expenseInclude<ExtArgs> | null
    where?: recurring_expenseWhereInput
    orderBy?: recurring_expenseOrderByWithRelationInput | recurring_expenseOrderByWithRelationInput[]
    cursor?: recurring_expenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Recurring_expenseScalarFieldEnum | Recurring_expenseScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    user_id: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    user_id: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    user_id: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    user_id?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    user_id?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    user_id?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which category to aggregate.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type categoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoryWhereInput
    orderBy?: categoryOrderByWithAggregationInput | categoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: categoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    description: string | null
    user_id: string
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends categoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type categorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    user_id?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
    expenses?: boolean | category$expensesArgs<ExtArgs>
    recurring_expenses?: boolean | category$recurring_expensesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type categorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    user_id?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type categorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    user_id?: boolean
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type categorySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    user_id?: boolean
  }

  export type categoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "user_id", ExtArgs["result"]["category"]>
  export type categoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
    expenses?: boolean | category$expensesArgs<ExtArgs>
    recurring_expenses?: boolean | category$recurring_expensesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type categoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type categoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $categoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "category"
    objects: {
      user: Prisma.$userPayload<ExtArgs>
      expenses: Prisma.$expensePayload<ExtArgs>[]
      recurring_expenses: Prisma.$recurring_expensePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      user_id: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type categoryGetPayload<S extends boolean | null | undefined | categoryDefaultArgs> = $Result.GetResult<Prisma.$categoryPayload, S>

  type categoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface categoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['category'], meta: { name: 'category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {categoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoryFindUniqueArgs>(args: SelectSubset<T, categoryFindUniqueArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoryFindUniqueOrThrowArgs>(args: SelectSubset<T, categoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoryFindFirstArgs>(args?: SelectSubset<T, categoryFindFirstArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoryFindFirstOrThrowArgs>(args?: SelectSubset<T, categoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends categoryFindManyArgs>(args?: SelectSubset<T, categoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {categoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends categoryCreateArgs>(args: SelectSubset<T, categoryCreateArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {categoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoryCreateManyArgs>(args?: SelectSubset<T, categoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {categoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends categoryCreateManyAndReturnArgs>(args?: SelectSubset<T, categoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {categoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends categoryDeleteArgs>(args: SelectSubset<T, categoryDeleteArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {categoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoryUpdateArgs>(args: SelectSubset<T, categoryUpdateArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {categoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoryDeleteManyArgs>(args?: SelectSubset<T, categoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoryUpdateManyArgs>(args: SelectSubset<T, categoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {categoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends categoryUpdateManyAndReturnArgs>(args: SelectSubset<T, categoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {categoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends categoryUpsertArgs>(args: SelectSubset<T, categoryUpsertArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoryCountArgs>(
      args?: Subset<T, categoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends categoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoryGroupByArgs['orderBy'] }
        : { orderBy?: categoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, categoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the category model
   */
  readonly fields: categoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    expenses<T extends category$expensesArgs<ExtArgs> = {}>(args?: Subset<T, category$expensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    recurring_expenses<T extends category$recurring_expensesArgs<ExtArgs> = {}>(args?: Subset<T, category$recurring_expensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recurring_expensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the category model
   */
  interface categoryFieldRefs {
    readonly id: FieldRef<"category", 'String'>
    readonly name: FieldRef<"category", 'String'>
    readonly description: FieldRef<"category", 'String'>
    readonly user_id: FieldRef<"category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * category findUnique
   */
  export type categoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category findUniqueOrThrow
   */
  export type categoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category findFirst
   */
  export type categoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category findFirstOrThrow
   */
  export type categoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which category to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category findMany
   */
  export type categoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoryOrderByWithRelationInput | categoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * category create
   */
  export type categoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The data needed to create a category.
     */
    data: XOR<categoryCreateInput, categoryUncheckedCreateInput>
  }

  /**
   * category createMany
   */
  export type categoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoryCreateManyInput | categoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * category createManyAndReturn
   */
  export type categoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * The data used to create many categories.
     */
    data: categoryCreateManyInput | categoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * category update
   */
  export type categoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The data needed to update a category.
     */
    data: XOR<categoryUpdateInput, categoryUncheckedUpdateInput>
    /**
     * Choose, which category to update.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category updateMany
   */
  export type categoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoryUpdateManyMutationInput, categoryUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoryWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * category updateManyAndReturn
   */
  export type categoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * The data used to update categories.
     */
    data: XOR<categoryUpdateManyMutationInput, categoryUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoryWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * category upsert
   */
  export type categoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * The filter to search for the category to update in case it exists.
     */
    where: categoryWhereUniqueInput
    /**
     * In case the category found by the `where` argument doesn't exist, create a new category with this data.
     */
    create: XOR<categoryCreateInput, categoryUncheckedCreateInput>
    /**
     * In case the category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoryUpdateInput, categoryUncheckedUpdateInput>
  }

  /**
   * category delete
   */
  export type categoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
    /**
     * Filter which category to delete.
     */
    where: categoryWhereUniqueInput
  }

  /**
   * category deleteMany
   */
  export type categoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoryWhereInput
    /**
     * Limit how many categories to delete.
     */
    limit?: number
  }

  /**
   * category.expenses
   */
  export type category$expensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense
     */
    omit?: expenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expenseInclude<ExtArgs> | null
    where?: expenseWhereInput
    orderBy?: expenseOrderByWithRelationInput | expenseOrderByWithRelationInput[]
    cursor?: expenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * category.recurring_expenses
   */
  export type category$recurring_expensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurring_expense
     */
    select?: recurring_expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recurring_expense
     */
    omit?: recurring_expenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recurring_expenseInclude<ExtArgs> | null
    where?: recurring_expenseWhereInput
    orderBy?: recurring_expenseOrderByWithRelationInput | recurring_expenseOrderByWithRelationInput[]
    cursor?: recurring_expenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Recurring_expenseScalarFieldEnum | Recurring_expenseScalarFieldEnum[]
  }

  /**
   * category without action
   */
  export type categoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the category
     */
    select?: categorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the category
     */
    omit?: categoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryInclude<ExtArgs> | null
  }


  /**
   * Model expense
   */

  export type AggregateExpense = {
    _count: ExpenseCountAggregateOutputType | null
    _avg: ExpenseAvgAggregateOutputType | null
    _sum: ExpenseSumAggregateOutputType | null
    _min: ExpenseMinAggregateOutputType | null
    _max: ExpenseMaxAggregateOutputType | null
  }

  export type ExpenseAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type ExpenseSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type ExpenseMinAggregateOutputType = {
    id: string | null
    description: string | null
    amount: Decimal | null
    date: Date | null
    notes: string | null
    category_id: string | null
    recurring_expense_id: string | null
    user_id: string | null
  }

  export type ExpenseMaxAggregateOutputType = {
    id: string | null
    description: string | null
    amount: Decimal | null
    date: Date | null
    notes: string | null
    category_id: string | null
    recurring_expense_id: string | null
    user_id: string | null
  }

  export type ExpenseCountAggregateOutputType = {
    id: number
    description: number
    amount: number
    date: number
    notes: number
    category_id: number
    recurring_expense_id: number
    user_id: number
    _all: number
  }


  export type ExpenseAvgAggregateInputType = {
    amount?: true
  }

  export type ExpenseSumAggregateInputType = {
    amount?: true
  }

  export type ExpenseMinAggregateInputType = {
    id?: true
    description?: true
    amount?: true
    date?: true
    notes?: true
    category_id?: true
    recurring_expense_id?: true
    user_id?: true
  }

  export type ExpenseMaxAggregateInputType = {
    id?: true
    description?: true
    amount?: true
    date?: true
    notes?: true
    category_id?: true
    recurring_expense_id?: true
    user_id?: true
  }

  export type ExpenseCountAggregateInputType = {
    id?: true
    description?: true
    amount?: true
    date?: true
    notes?: true
    category_id?: true
    recurring_expense_id?: true
    user_id?: true
    _all?: true
  }

  export type ExpenseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which expense to aggregate.
     */
    where?: expenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of expenses to fetch.
     */
    orderBy?: expenseOrderByWithRelationInput | expenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: expenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned expenses
    **/
    _count?: true | ExpenseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExpenseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExpenseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExpenseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExpenseMaxAggregateInputType
  }

  export type GetExpenseAggregateType<T extends ExpenseAggregateArgs> = {
        [P in keyof T & keyof AggregateExpense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExpense[P]>
      : GetScalarType<T[P], AggregateExpense[P]>
  }




  export type expenseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: expenseWhereInput
    orderBy?: expenseOrderByWithAggregationInput | expenseOrderByWithAggregationInput[]
    by: ExpenseScalarFieldEnum[] | ExpenseScalarFieldEnum
    having?: expenseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExpenseCountAggregateInputType | true
    _avg?: ExpenseAvgAggregateInputType
    _sum?: ExpenseSumAggregateInputType
    _min?: ExpenseMinAggregateInputType
    _max?: ExpenseMaxAggregateInputType
  }

  export type ExpenseGroupByOutputType = {
    id: string
    description: string
    amount: Decimal
    date: Date
    notes: string | null
    category_id: string
    recurring_expense_id: string | null
    user_id: string
    _count: ExpenseCountAggregateOutputType | null
    _avg: ExpenseAvgAggregateOutputType | null
    _sum: ExpenseSumAggregateOutputType | null
    _min: ExpenseMinAggregateOutputType | null
    _max: ExpenseMaxAggregateOutputType | null
  }

  type GetExpenseGroupByPayload<T extends expenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExpenseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExpenseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
            : GetScalarType<T[P], ExpenseGroupByOutputType[P]>
        }
      >
    >


  export type expenseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    amount?: boolean
    date?: boolean
    notes?: boolean
    category_id?: boolean
    recurring_expense_id?: boolean
    user_id?: boolean
    category?: boolean | categoryDefaultArgs<ExtArgs>
    recurring_expense?: boolean | expense$recurring_expenseArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expense"]>

  export type expenseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    amount?: boolean
    date?: boolean
    notes?: boolean
    category_id?: boolean
    recurring_expense_id?: boolean
    user_id?: boolean
    category?: boolean | categoryDefaultArgs<ExtArgs>
    recurring_expense?: boolean | expense$recurring_expenseArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expense"]>

  export type expenseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    amount?: boolean
    date?: boolean
    notes?: boolean
    category_id?: boolean
    recurring_expense_id?: boolean
    user_id?: boolean
    category?: boolean | categoryDefaultArgs<ExtArgs>
    recurring_expense?: boolean | expense$recurring_expenseArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["expense"]>

  export type expenseSelectScalar = {
    id?: boolean
    description?: boolean
    amount?: boolean
    date?: boolean
    notes?: boolean
    category_id?: boolean
    recurring_expense_id?: boolean
    user_id?: boolean
  }

  export type expenseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "amount" | "date" | "notes" | "category_id" | "recurring_expense_id" | "user_id", ExtArgs["result"]["expense"]>
  export type expenseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | categoryDefaultArgs<ExtArgs>
    recurring_expense?: boolean | expense$recurring_expenseArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type expenseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | categoryDefaultArgs<ExtArgs>
    recurring_expense?: boolean | expense$recurring_expenseArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type expenseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | categoryDefaultArgs<ExtArgs>
    recurring_expense?: boolean | expense$recurring_expenseArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $expensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "expense"
    objects: {
      category: Prisma.$categoryPayload<ExtArgs>
      recurring_expense: Prisma.$recurring_expensePayload<ExtArgs> | null
      user: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      description: string
      amount: Prisma.Decimal
      date: Date
      notes: string | null
      category_id: string
      recurring_expense_id: string | null
      user_id: string
    }, ExtArgs["result"]["expense"]>
    composites: {}
  }

  type expenseGetPayload<S extends boolean | null | undefined | expenseDefaultArgs> = $Result.GetResult<Prisma.$expensePayload, S>

  type expenseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<expenseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExpenseCountAggregateInputType | true
    }

  export interface expenseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['expense'], meta: { name: 'expense' } }
    /**
     * Find zero or one Expense that matches the filter.
     * @param {expenseFindUniqueArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends expenseFindUniqueArgs>(args: SelectSubset<T, expenseFindUniqueArgs<ExtArgs>>): Prisma__expenseClient<$Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Expense that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {expenseFindUniqueOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends expenseFindUniqueOrThrowArgs>(args: SelectSubset<T, expenseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__expenseClient<$Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expense that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expenseFindFirstArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends expenseFindFirstArgs>(args?: SelectSubset<T, expenseFindFirstArgs<ExtArgs>>): Prisma__expenseClient<$Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Expense that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expenseFindFirstOrThrowArgs} args - Arguments to find a Expense
     * @example
     * // Get one Expense
     * const expense = await prisma.expense.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends expenseFindFirstOrThrowArgs>(args?: SelectSubset<T, expenseFindFirstOrThrowArgs<ExtArgs>>): Prisma__expenseClient<$Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Expenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expenseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Expenses
     * const expenses = await prisma.expense.findMany()
     * 
     * // Get first 10 Expenses
     * const expenses = await prisma.expense.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const expenseWithIdOnly = await prisma.expense.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends expenseFindManyArgs>(args?: SelectSubset<T, expenseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Expense.
     * @param {expenseCreateArgs} args - Arguments to create a Expense.
     * @example
     * // Create one Expense
     * const Expense = await prisma.expense.create({
     *   data: {
     *     // ... data to create a Expense
     *   }
     * })
     * 
     */
    create<T extends expenseCreateArgs>(args: SelectSubset<T, expenseCreateArgs<ExtArgs>>): Prisma__expenseClient<$Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Expenses.
     * @param {expenseCreateManyArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expense = await prisma.expense.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends expenseCreateManyArgs>(args?: SelectSubset<T, expenseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Expenses and returns the data saved in the database.
     * @param {expenseCreateManyAndReturnArgs} args - Arguments to create many Expenses.
     * @example
     * // Create many Expenses
     * const expense = await prisma.expense.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Expenses and only return the `id`
     * const expenseWithIdOnly = await prisma.expense.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends expenseCreateManyAndReturnArgs>(args?: SelectSubset<T, expenseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Expense.
     * @param {expenseDeleteArgs} args - Arguments to delete one Expense.
     * @example
     * // Delete one Expense
     * const Expense = await prisma.expense.delete({
     *   where: {
     *     // ... filter to delete one Expense
     *   }
     * })
     * 
     */
    delete<T extends expenseDeleteArgs>(args: SelectSubset<T, expenseDeleteArgs<ExtArgs>>): Prisma__expenseClient<$Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Expense.
     * @param {expenseUpdateArgs} args - Arguments to update one Expense.
     * @example
     * // Update one Expense
     * const expense = await prisma.expense.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends expenseUpdateArgs>(args: SelectSubset<T, expenseUpdateArgs<ExtArgs>>): Prisma__expenseClient<$Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Expenses.
     * @param {expenseDeleteManyArgs} args - Arguments to filter Expenses to delete.
     * @example
     * // Delete a few Expenses
     * const { count } = await prisma.expense.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends expenseDeleteManyArgs>(args?: SelectSubset<T, expenseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Expenses
     * const expense = await prisma.expense.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends expenseUpdateManyArgs>(args: SelectSubset<T, expenseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Expenses and returns the data updated in the database.
     * @param {expenseUpdateManyAndReturnArgs} args - Arguments to update many Expenses.
     * @example
     * // Update many Expenses
     * const expense = await prisma.expense.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Expenses and only return the `id`
     * const expenseWithIdOnly = await prisma.expense.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends expenseUpdateManyAndReturnArgs>(args: SelectSubset<T, expenseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Expense.
     * @param {expenseUpsertArgs} args - Arguments to update or create a Expense.
     * @example
     * // Update or create a Expense
     * const expense = await prisma.expense.upsert({
     *   create: {
     *     // ... data to create a Expense
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Expense we want to update
     *   }
     * })
     */
    upsert<T extends expenseUpsertArgs>(args: SelectSubset<T, expenseUpsertArgs<ExtArgs>>): Prisma__expenseClient<$Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expenseCountArgs} args - Arguments to filter Expenses to count.
     * @example
     * // Count the number of Expenses
     * const count = await prisma.expense.count({
     *   where: {
     *     // ... the filter for the Expenses we want to count
     *   }
     * })
    **/
    count<T extends expenseCountArgs>(
      args?: Subset<T, expenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExpenseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExpenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExpenseAggregateArgs>(args: Subset<T, ExpenseAggregateArgs>): Prisma.PrismaPromise<GetExpenseAggregateType<T>>

    /**
     * Group by Expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {expenseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends expenseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: expenseGroupByArgs['orderBy'] }
        : { orderBy?: expenseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, expenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExpenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the expense model
   */
  readonly fields: expenseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for expense.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__expenseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends categoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, categoryDefaultArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    recurring_expense<T extends expense$recurring_expenseArgs<ExtArgs> = {}>(args?: Subset<T, expense$recurring_expenseArgs<ExtArgs>>): Prisma__recurring_expenseClient<$Result.GetResult<Prisma.$recurring_expensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the expense model
   */
  interface expenseFieldRefs {
    readonly id: FieldRef<"expense", 'String'>
    readonly description: FieldRef<"expense", 'String'>
    readonly amount: FieldRef<"expense", 'Decimal'>
    readonly date: FieldRef<"expense", 'DateTime'>
    readonly notes: FieldRef<"expense", 'String'>
    readonly category_id: FieldRef<"expense", 'String'>
    readonly recurring_expense_id: FieldRef<"expense", 'String'>
    readonly user_id: FieldRef<"expense", 'String'>
  }
    

  // Custom InputTypes
  /**
   * expense findUnique
   */
  export type expenseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense
     */
    omit?: expenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expenseInclude<ExtArgs> | null
    /**
     * Filter, which expense to fetch.
     */
    where: expenseWhereUniqueInput
  }

  /**
   * expense findUniqueOrThrow
   */
  export type expenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense
     */
    omit?: expenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expenseInclude<ExtArgs> | null
    /**
     * Filter, which expense to fetch.
     */
    where: expenseWhereUniqueInput
  }

  /**
   * expense findFirst
   */
  export type expenseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense
     */
    omit?: expenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expenseInclude<ExtArgs> | null
    /**
     * Filter, which expense to fetch.
     */
    where?: expenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of expenses to fetch.
     */
    orderBy?: expenseOrderByWithRelationInput | expenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for expenses.
     */
    cursor?: expenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * expense findFirstOrThrow
   */
  export type expenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense
     */
    omit?: expenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expenseInclude<ExtArgs> | null
    /**
     * Filter, which expense to fetch.
     */
    where?: expenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of expenses to fetch.
     */
    orderBy?: expenseOrderByWithRelationInput | expenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for expenses.
     */
    cursor?: expenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of expenses.
     */
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * expense findMany
   */
  export type expenseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense
     */
    omit?: expenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expenseInclude<ExtArgs> | null
    /**
     * Filter, which expenses to fetch.
     */
    where?: expenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of expenses to fetch.
     */
    orderBy?: expenseOrderByWithRelationInput | expenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing expenses.
     */
    cursor?: expenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` expenses.
     */
    skip?: number
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * expense create
   */
  export type expenseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense
     */
    omit?: expenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expenseInclude<ExtArgs> | null
    /**
     * The data needed to create a expense.
     */
    data: XOR<expenseCreateInput, expenseUncheckedCreateInput>
  }

  /**
   * expense createMany
   */
  export type expenseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many expenses.
     */
    data: expenseCreateManyInput | expenseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * expense createManyAndReturn
   */
  export type expenseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the expense
     */
    omit?: expenseOmit<ExtArgs> | null
    /**
     * The data used to create many expenses.
     */
    data: expenseCreateManyInput | expenseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expenseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * expense update
   */
  export type expenseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense
     */
    omit?: expenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expenseInclude<ExtArgs> | null
    /**
     * The data needed to update a expense.
     */
    data: XOR<expenseUpdateInput, expenseUncheckedUpdateInput>
    /**
     * Choose, which expense to update.
     */
    where: expenseWhereUniqueInput
  }

  /**
   * expense updateMany
   */
  export type expenseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update expenses.
     */
    data: XOR<expenseUpdateManyMutationInput, expenseUncheckedUpdateManyInput>
    /**
     * Filter which expenses to update
     */
    where?: expenseWhereInput
    /**
     * Limit how many expenses to update.
     */
    limit?: number
  }

  /**
   * expense updateManyAndReturn
   */
  export type expenseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the expense
     */
    omit?: expenseOmit<ExtArgs> | null
    /**
     * The data used to update expenses.
     */
    data: XOR<expenseUpdateManyMutationInput, expenseUncheckedUpdateManyInput>
    /**
     * Filter which expenses to update
     */
    where?: expenseWhereInput
    /**
     * Limit how many expenses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expenseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * expense upsert
   */
  export type expenseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense
     */
    omit?: expenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expenseInclude<ExtArgs> | null
    /**
     * The filter to search for the expense to update in case it exists.
     */
    where: expenseWhereUniqueInput
    /**
     * In case the expense found by the `where` argument doesn't exist, create a new expense with this data.
     */
    create: XOR<expenseCreateInput, expenseUncheckedCreateInput>
    /**
     * In case the expense was found with the provided `where` argument, update it with this data.
     */
    update: XOR<expenseUpdateInput, expenseUncheckedUpdateInput>
  }

  /**
   * expense delete
   */
  export type expenseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense
     */
    omit?: expenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expenseInclude<ExtArgs> | null
    /**
     * Filter which expense to delete.
     */
    where: expenseWhereUniqueInput
  }

  /**
   * expense deleteMany
   */
  export type expenseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which expenses to delete
     */
    where?: expenseWhereInput
    /**
     * Limit how many expenses to delete.
     */
    limit?: number
  }

  /**
   * expense.recurring_expense
   */
  export type expense$recurring_expenseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurring_expense
     */
    select?: recurring_expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recurring_expense
     */
    omit?: recurring_expenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recurring_expenseInclude<ExtArgs> | null
    where?: recurring_expenseWhereInput
  }

  /**
   * expense without action
   */
  export type expenseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense
     */
    omit?: expenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expenseInclude<ExtArgs> | null
  }


  /**
   * Model recurring_expense
   */

  export type AggregateRecurring_expense = {
    _count: Recurring_expenseCountAggregateOutputType | null
    _avg: Recurring_expenseAvgAggregateOutputType | null
    _sum: Recurring_expenseSumAggregateOutputType | null
    _min: Recurring_expenseMinAggregateOutputType | null
    _max: Recurring_expenseMaxAggregateOutputType | null
  }

  export type Recurring_expenseAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type Recurring_expenseSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type Recurring_expenseMinAggregateOutputType = {
    id: string | null
    description: string | null
    amount: Decimal | null
    frequency: $Enums.frequency | null
    start_date: Date | null
    end_date: Date | null
    category_id: string | null
    user_id: string | null
  }

  export type Recurring_expenseMaxAggregateOutputType = {
    id: string | null
    description: string | null
    amount: Decimal | null
    frequency: $Enums.frequency | null
    start_date: Date | null
    end_date: Date | null
    category_id: string | null
    user_id: string | null
  }

  export type Recurring_expenseCountAggregateOutputType = {
    id: number
    description: number
    amount: number
    frequency: number
    start_date: number
    end_date: number
    category_id: number
    user_id: number
    _all: number
  }


  export type Recurring_expenseAvgAggregateInputType = {
    amount?: true
  }

  export type Recurring_expenseSumAggregateInputType = {
    amount?: true
  }

  export type Recurring_expenseMinAggregateInputType = {
    id?: true
    description?: true
    amount?: true
    frequency?: true
    start_date?: true
    end_date?: true
    category_id?: true
    user_id?: true
  }

  export type Recurring_expenseMaxAggregateInputType = {
    id?: true
    description?: true
    amount?: true
    frequency?: true
    start_date?: true
    end_date?: true
    category_id?: true
    user_id?: true
  }

  export type Recurring_expenseCountAggregateInputType = {
    id?: true
    description?: true
    amount?: true
    frequency?: true
    start_date?: true
    end_date?: true
    category_id?: true
    user_id?: true
    _all?: true
  }

  export type Recurring_expenseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which recurring_expense to aggregate.
     */
    where?: recurring_expenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recurring_expenses to fetch.
     */
    orderBy?: recurring_expenseOrderByWithRelationInput | recurring_expenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: recurring_expenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recurring_expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recurring_expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned recurring_expenses
    **/
    _count?: true | Recurring_expenseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Recurring_expenseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Recurring_expenseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Recurring_expenseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Recurring_expenseMaxAggregateInputType
  }

  export type GetRecurring_expenseAggregateType<T extends Recurring_expenseAggregateArgs> = {
        [P in keyof T & keyof AggregateRecurring_expense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecurring_expense[P]>
      : GetScalarType<T[P], AggregateRecurring_expense[P]>
  }




  export type recurring_expenseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: recurring_expenseWhereInput
    orderBy?: recurring_expenseOrderByWithAggregationInput | recurring_expenseOrderByWithAggregationInput[]
    by: Recurring_expenseScalarFieldEnum[] | Recurring_expenseScalarFieldEnum
    having?: recurring_expenseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Recurring_expenseCountAggregateInputType | true
    _avg?: Recurring_expenseAvgAggregateInputType
    _sum?: Recurring_expenseSumAggregateInputType
    _min?: Recurring_expenseMinAggregateInputType
    _max?: Recurring_expenseMaxAggregateInputType
  }

  export type Recurring_expenseGroupByOutputType = {
    id: string
    description: string
    amount: Decimal
    frequency: $Enums.frequency
    start_date: Date
    end_date: Date | null
    category_id: string
    user_id: string
    _count: Recurring_expenseCountAggregateOutputType | null
    _avg: Recurring_expenseAvgAggregateOutputType | null
    _sum: Recurring_expenseSumAggregateOutputType | null
    _min: Recurring_expenseMinAggregateOutputType | null
    _max: Recurring_expenseMaxAggregateOutputType | null
  }

  type GetRecurring_expenseGroupByPayload<T extends recurring_expenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Recurring_expenseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Recurring_expenseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Recurring_expenseGroupByOutputType[P]>
            : GetScalarType<T[P], Recurring_expenseGroupByOutputType[P]>
        }
      >
    >


  export type recurring_expenseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    amount?: boolean
    frequency?: boolean
    start_date?: boolean
    end_date?: boolean
    category_id?: boolean
    user_id?: boolean
    category?: boolean | categoryDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    generated_expenses?: boolean | recurring_expense$generated_expensesArgs<ExtArgs>
    _count?: boolean | Recurring_expenseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recurring_expense"]>

  export type recurring_expenseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    amount?: boolean
    frequency?: boolean
    start_date?: boolean
    end_date?: boolean
    category_id?: boolean
    user_id?: boolean
    category?: boolean | categoryDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recurring_expense"]>

  export type recurring_expenseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    amount?: boolean
    frequency?: boolean
    start_date?: boolean
    end_date?: boolean
    category_id?: boolean
    user_id?: boolean
    category?: boolean | categoryDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["recurring_expense"]>

  export type recurring_expenseSelectScalar = {
    id?: boolean
    description?: boolean
    amount?: boolean
    frequency?: boolean
    start_date?: boolean
    end_date?: boolean
    category_id?: boolean
    user_id?: boolean
  }

  export type recurring_expenseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description" | "amount" | "frequency" | "start_date" | "end_date" | "category_id" | "user_id", ExtArgs["result"]["recurring_expense"]>
  export type recurring_expenseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | categoryDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
    generated_expenses?: boolean | recurring_expense$generated_expensesArgs<ExtArgs>
    _count?: boolean | Recurring_expenseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type recurring_expenseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | categoryDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }
  export type recurring_expenseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | categoryDefaultArgs<ExtArgs>
    user?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $recurring_expensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "recurring_expense"
    objects: {
      category: Prisma.$categoryPayload<ExtArgs>
      user: Prisma.$userPayload<ExtArgs>
      generated_expenses: Prisma.$expensePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      description: string
      amount: Prisma.Decimal
      frequency: $Enums.frequency
      start_date: Date
      end_date: Date | null
      category_id: string
      user_id: string
    }, ExtArgs["result"]["recurring_expense"]>
    composites: {}
  }

  type recurring_expenseGetPayload<S extends boolean | null | undefined | recurring_expenseDefaultArgs> = $Result.GetResult<Prisma.$recurring_expensePayload, S>

  type recurring_expenseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<recurring_expenseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Recurring_expenseCountAggregateInputType | true
    }

  export interface recurring_expenseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['recurring_expense'], meta: { name: 'recurring_expense' } }
    /**
     * Find zero or one Recurring_expense that matches the filter.
     * @param {recurring_expenseFindUniqueArgs} args - Arguments to find a Recurring_expense
     * @example
     * // Get one Recurring_expense
     * const recurring_expense = await prisma.recurring_expense.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends recurring_expenseFindUniqueArgs>(args: SelectSubset<T, recurring_expenseFindUniqueArgs<ExtArgs>>): Prisma__recurring_expenseClient<$Result.GetResult<Prisma.$recurring_expensePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Recurring_expense that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {recurring_expenseFindUniqueOrThrowArgs} args - Arguments to find a Recurring_expense
     * @example
     * // Get one Recurring_expense
     * const recurring_expense = await prisma.recurring_expense.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends recurring_expenseFindUniqueOrThrowArgs>(args: SelectSubset<T, recurring_expenseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__recurring_expenseClient<$Result.GetResult<Prisma.$recurring_expensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recurring_expense that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recurring_expenseFindFirstArgs} args - Arguments to find a Recurring_expense
     * @example
     * // Get one Recurring_expense
     * const recurring_expense = await prisma.recurring_expense.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends recurring_expenseFindFirstArgs>(args?: SelectSubset<T, recurring_expenseFindFirstArgs<ExtArgs>>): Prisma__recurring_expenseClient<$Result.GetResult<Prisma.$recurring_expensePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Recurring_expense that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recurring_expenseFindFirstOrThrowArgs} args - Arguments to find a Recurring_expense
     * @example
     * // Get one Recurring_expense
     * const recurring_expense = await prisma.recurring_expense.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends recurring_expenseFindFirstOrThrowArgs>(args?: SelectSubset<T, recurring_expenseFindFirstOrThrowArgs<ExtArgs>>): Prisma__recurring_expenseClient<$Result.GetResult<Prisma.$recurring_expensePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Recurring_expenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recurring_expenseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Recurring_expenses
     * const recurring_expenses = await prisma.recurring_expense.findMany()
     * 
     * // Get first 10 Recurring_expenses
     * const recurring_expenses = await prisma.recurring_expense.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recurring_expenseWithIdOnly = await prisma.recurring_expense.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends recurring_expenseFindManyArgs>(args?: SelectSubset<T, recurring_expenseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recurring_expensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Recurring_expense.
     * @param {recurring_expenseCreateArgs} args - Arguments to create a Recurring_expense.
     * @example
     * // Create one Recurring_expense
     * const Recurring_expense = await prisma.recurring_expense.create({
     *   data: {
     *     // ... data to create a Recurring_expense
     *   }
     * })
     * 
     */
    create<T extends recurring_expenseCreateArgs>(args: SelectSubset<T, recurring_expenseCreateArgs<ExtArgs>>): Prisma__recurring_expenseClient<$Result.GetResult<Prisma.$recurring_expensePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Recurring_expenses.
     * @param {recurring_expenseCreateManyArgs} args - Arguments to create many Recurring_expenses.
     * @example
     * // Create many Recurring_expenses
     * const recurring_expense = await prisma.recurring_expense.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends recurring_expenseCreateManyArgs>(args?: SelectSubset<T, recurring_expenseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Recurring_expenses and returns the data saved in the database.
     * @param {recurring_expenseCreateManyAndReturnArgs} args - Arguments to create many Recurring_expenses.
     * @example
     * // Create many Recurring_expenses
     * const recurring_expense = await prisma.recurring_expense.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Recurring_expenses and only return the `id`
     * const recurring_expenseWithIdOnly = await prisma.recurring_expense.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends recurring_expenseCreateManyAndReturnArgs>(args?: SelectSubset<T, recurring_expenseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recurring_expensePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Recurring_expense.
     * @param {recurring_expenseDeleteArgs} args - Arguments to delete one Recurring_expense.
     * @example
     * // Delete one Recurring_expense
     * const Recurring_expense = await prisma.recurring_expense.delete({
     *   where: {
     *     // ... filter to delete one Recurring_expense
     *   }
     * })
     * 
     */
    delete<T extends recurring_expenseDeleteArgs>(args: SelectSubset<T, recurring_expenseDeleteArgs<ExtArgs>>): Prisma__recurring_expenseClient<$Result.GetResult<Prisma.$recurring_expensePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Recurring_expense.
     * @param {recurring_expenseUpdateArgs} args - Arguments to update one Recurring_expense.
     * @example
     * // Update one Recurring_expense
     * const recurring_expense = await prisma.recurring_expense.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends recurring_expenseUpdateArgs>(args: SelectSubset<T, recurring_expenseUpdateArgs<ExtArgs>>): Prisma__recurring_expenseClient<$Result.GetResult<Prisma.$recurring_expensePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Recurring_expenses.
     * @param {recurring_expenseDeleteManyArgs} args - Arguments to filter Recurring_expenses to delete.
     * @example
     * // Delete a few Recurring_expenses
     * const { count } = await prisma.recurring_expense.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends recurring_expenseDeleteManyArgs>(args?: SelectSubset<T, recurring_expenseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recurring_expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recurring_expenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Recurring_expenses
     * const recurring_expense = await prisma.recurring_expense.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends recurring_expenseUpdateManyArgs>(args: SelectSubset<T, recurring_expenseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Recurring_expenses and returns the data updated in the database.
     * @param {recurring_expenseUpdateManyAndReturnArgs} args - Arguments to update many Recurring_expenses.
     * @example
     * // Update many Recurring_expenses
     * const recurring_expense = await prisma.recurring_expense.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Recurring_expenses and only return the `id`
     * const recurring_expenseWithIdOnly = await prisma.recurring_expense.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends recurring_expenseUpdateManyAndReturnArgs>(args: SelectSubset<T, recurring_expenseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$recurring_expensePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Recurring_expense.
     * @param {recurring_expenseUpsertArgs} args - Arguments to update or create a Recurring_expense.
     * @example
     * // Update or create a Recurring_expense
     * const recurring_expense = await prisma.recurring_expense.upsert({
     *   create: {
     *     // ... data to create a Recurring_expense
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Recurring_expense we want to update
     *   }
     * })
     */
    upsert<T extends recurring_expenseUpsertArgs>(args: SelectSubset<T, recurring_expenseUpsertArgs<ExtArgs>>): Prisma__recurring_expenseClient<$Result.GetResult<Prisma.$recurring_expensePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Recurring_expenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recurring_expenseCountArgs} args - Arguments to filter Recurring_expenses to count.
     * @example
     * // Count the number of Recurring_expenses
     * const count = await prisma.recurring_expense.count({
     *   where: {
     *     // ... the filter for the Recurring_expenses we want to count
     *   }
     * })
    **/
    count<T extends recurring_expenseCountArgs>(
      args?: Subset<T, recurring_expenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Recurring_expenseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Recurring_expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Recurring_expenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Recurring_expenseAggregateArgs>(args: Subset<T, Recurring_expenseAggregateArgs>): Prisma.PrismaPromise<GetRecurring_expenseAggregateType<T>>

    /**
     * Group by Recurring_expense.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {recurring_expenseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends recurring_expenseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: recurring_expenseGroupByArgs['orderBy'] }
        : { orderBy?: recurring_expenseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, recurring_expenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecurring_expenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the recurring_expense model
   */
  readonly fields: recurring_expenseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for recurring_expense.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__recurring_expenseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends categoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, categoryDefaultArgs<ExtArgs>>): Prisma__categoryClient<$Result.GetResult<Prisma.$categoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    generated_expenses<T extends recurring_expense$generated_expensesArgs<ExtArgs> = {}>(args?: Subset<T, recurring_expense$generated_expensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$expensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the recurring_expense model
   */
  interface recurring_expenseFieldRefs {
    readonly id: FieldRef<"recurring_expense", 'String'>
    readonly description: FieldRef<"recurring_expense", 'String'>
    readonly amount: FieldRef<"recurring_expense", 'Decimal'>
    readonly frequency: FieldRef<"recurring_expense", 'frequency'>
    readonly start_date: FieldRef<"recurring_expense", 'DateTime'>
    readonly end_date: FieldRef<"recurring_expense", 'DateTime'>
    readonly category_id: FieldRef<"recurring_expense", 'String'>
    readonly user_id: FieldRef<"recurring_expense", 'String'>
  }
    

  // Custom InputTypes
  /**
   * recurring_expense findUnique
   */
  export type recurring_expenseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurring_expense
     */
    select?: recurring_expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recurring_expense
     */
    omit?: recurring_expenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recurring_expenseInclude<ExtArgs> | null
    /**
     * Filter, which recurring_expense to fetch.
     */
    where: recurring_expenseWhereUniqueInput
  }

  /**
   * recurring_expense findUniqueOrThrow
   */
  export type recurring_expenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurring_expense
     */
    select?: recurring_expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recurring_expense
     */
    omit?: recurring_expenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recurring_expenseInclude<ExtArgs> | null
    /**
     * Filter, which recurring_expense to fetch.
     */
    where: recurring_expenseWhereUniqueInput
  }

  /**
   * recurring_expense findFirst
   */
  export type recurring_expenseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurring_expense
     */
    select?: recurring_expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recurring_expense
     */
    omit?: recurring_expenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recurring_expenseInclude<ExtArgs> | null
    /**
     * Filter, which recurring_expense to fetch.
     */
    where?: recurring_expenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recurring_expenses to fetch.
     */
    orderBy?: recurring_expenseOrderByWithRelationInput | recurring_expenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for recurring_expenses.
     */
    cursor?: recurring_expenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recurring_expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recurring_expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of recurring_expenses.
     */
    distinct?: Recurring_expenseScalarFieldEnum | Recurring_expenseScalarFieldEnum[]
  }

  /**
   * recurring_expense findFirstOrThrow
   */
  export type recurring_expenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurring_expense
     */
    select?: recurring_expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recurring_expense
     */
    omit?: recurring_expenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recurring_expenseInclude<ExtArgs> | null
    /**
     * Filter, which recurring_expense to fetch.
     */
    where?: recurring_expenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recurring_expenses to fetch.
     */
    orderBy?: recurring_expenseOrderByWithRelationInput | recurring_expenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for recurring_expenses.
     */
    cursor?: recurring_expenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recurring_expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recurring_expenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of recurring_expenses.
     */
    distinct?: Recurring_expenseScalarFieldEnum | Recurring_expenseScalarFieldEnum[]
  }

  /**
   * recurring_expense findMany
   */
  export type recurring_expenseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurring_expense
     */
    select?: recurring_expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recurring_expense
     */
    omit?: recurring_expenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recurring_expenseInclude<ExtArgs> | null
    /**
     * Filter, which recurring_expenses to fetch.
     */
    where?: recurring_expenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of recurring_expenses to fetch.
     */
    orderBy?: recurring_expenseOrderByWithRelationInput | recurring_expenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing recurring_expenses.
     */
    cursor?: recurring_expenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` recurring_expenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` recurring_expenses.
     */
    skip?: number
    distinct?: Recurring_expenseScalarFieldEnum | Recurring_expenseScalarFieldEnum[]
  }

  /**
   * recurring_expense create
   */
  export type recurring_expenseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurring_expense
     */
    select?: recurring_expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recurring_expense
     */
    omit?: recurring_expenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recurring_expenseInclude<ExtArgs> | null
    /**
     * The data needed to create a recurring_expense.
     */
    data: XOR<recurring_expenseCreateInput, recurring_expenseUncheckedCreateInput>
  }

  /**
   * recurring_expense createMany
   */
  export type recurring_expenseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many recurring_expenses.
     */
    data: recurring_expenseCreateManyInput | recurring_expenseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * recurring_expense createManyAndReturn
   */
  export type recurring_expenseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurring_expense
     */
    select?: recurring_expenseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the recurring_expense
     */
    omit?: recurring_expenseOmit<ExtArgs> | null
    /**
     * The data used to create many recurring_expenses.
     */
    data: recurring_expenseCreateManyInput | recurring_expenseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recurring_expenseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * recurring_expense update
   */
  export type recurring_expenseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurring_expense
     */
    select?: recurring_expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recurring_expense
     */
    omit?: recurring_expenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recurring_expenseInclude<ExtArgs> | null
    /**
     * The data needed to update a recurring_expense.
     */
    data: XOR<recurring_expenseUpdateInput, recurring_expenseUncheckedUpdateInput>
    /**
     * Choose, which recurring_expense to update.
     */
    where: recurring_expenseWhereUniqueInput
  }

  /**
   * recurring_expense updateMany
   */
  export type recurring_expenseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update recurring_expenses.
     */
    data: XOR<recurring_expenseUpdateManyMutationInput, recurring_expenseUncheckedUpdateManyInput>
    /**
     * Filter which recurring_expenses to update
     */
    where?: recurring_expenseWhereInput
    /**
     * Limit how many recurring_expenses to update.
     */
    limit?: number
  }

  /**
   * recurring_expense updateManyAndReturn
   */
  export type recurring_expenseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurring_expense
     */
    select?: recurring_expenseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the recurring_expense
     */
    omit?: recurring_expenseOmit<ExtArgs> | null
    /**
     * The data used to update recurring_expenses.
     */
    data: XOR<recurring_expenseUpdateManyMutationInput, recurring_expenseUncheckedUpdateManyInput>
    /**
     * Filter which recurring_expenses to update
     */
    where?: recurring_expenseWhereInput
    /**
     * Limit how many recurring_expenses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recurring_expenseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * recurring_expense upsert
   */
  export type recurring_expenseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurring_expense
     */
    select?: recurring_expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recurring_expense
     */
    omit?: recurring_expenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recurring_expenseInclude<ExtArgs> | null
    /**
     * The filter to search for the recurring_expense to update in case it exists.
     */
    where: recurring_expenseWhereUniqueInput
    /**
     * In case the recurring_expense found by the `where` argument doesn't exist, create a new recurring_expense with this data.
     */
    create: XOR<recurring_expenseCreateInput, recurring_expenseUncheckedCreateInput>
    /**
     * In case the recurring_expense was found with the provided `where` argument, update it with this data.
     */
    update: XOR<recurring_expenseUpdateInput, recurring_expenseUncheckedUpdateInput>
  }

  /**
   * recurring_expense delete
   */
  export type recurring_expenseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurring_expense
     */
    select?: recurring_expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recurring_expense
     */
    omit?: recurring_expenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recurring_expenseInclude<ExtArgs> | null
    /**
     * Filter which recurring_expense to delete.
     */
    where: recurring_expenseWhereUniqueInput
  }

  /**
   * recurring_expense deleteMany
   */
  export type recurring_expenseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which recurring_expenses to delete
     */
    where?: recurring_expenseWhereInput
    /**
     * Limit how many recurring_expenses to delete.
     */
    limit?: number
  }

  /**
   * recurring_expense.generated_expenses
   */
  export type recurring_expense$generated_expensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the expense
     */
    select?: expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the expense
     */
    omit?: expenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: expenseInclude<ExtArgs> | null
    where?: expenseWhereInput
    orderBy?: expenseOrderByWithRelationInput | expenseOrderByWithRelationInput[]
    cursor?: expenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExpenseScalarFieldEnum | ExpenseScalarFieldEnum[]
  }

  /**
   * recurring_expense without action
   */
  export type recurring_expenseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the recurring_expense
     */
    select?: recurring_expenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the recurring_expense
     */
    omit?: recurring_expenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: recurring_expenseInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password_hash: 'password_hash',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    user_id: 'user_id'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const ExpenseScalarFieldEnum: {
    id: 'id',
    description: 'description',
    amount: 'amount',
    date: 'date',
    notes: 'notes',
    category_id: 'category_id',
    recurring_expense_id: 'recurring_expense_id',
    user_id: 'user_id'
  };

  export type ExpenseScalarFieldEnum = (typeof ExpenseScalarFieldEnum)[keyof typeof ExpenseScalarFieldEnum]


  export const Recurring_expenseScalarFieldEnum: {
    id: 'id',
    description: 'description',
    amount: 'amount',
    frequency: 'frequency',
    start_date: 'start_date',
    end_date: 'end_date',
    category_id: 'category_id',
    user_id: 'user_id'
  };

  export type Recurring_expenseScalarFieldEnum = (typeof Recurring_expenseScalarFieldEnum)[keyof typeof Recurring_expenseScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'frequency'
   */
  export type EnumfrequencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'frequency'>
    


  /**
   * Reference to a field of type 'frequency[]'
   */
  export type ListEnumfrequencyFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'frequency[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: StringFilter<"user"> | string
    email?: StringFilter<"user"> | string
    name?: StringFilter<"user"> | string
    password_hash?: StringFilter<"user"> | string
    created_at?: DateTimeFilter<"user"> | Date | string
    updated_at?: DateTimeFilter<"user"> | Date | string
    categories?: CategoryListRelationFilter
    expenses?: ExpenseListRelationFilter
    recurring_expenses?: Recurring_expenseListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    categories?: categoryOrderByRelationAggregateInput
    expenses?: expenseOrderByRelationAggregateInput
    recurring_expenses?: recurring_expenseOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    name?: StringFilter<"user"> | string
    password_hash?: StringFilter<"user"> | string
    created_at?: DateTimeFilter<"user"> | Date | string
    updated_at?: DateTimeFilter<"user"> | Date | string
    categories?: CategoryListRelationFilter
    expenses?: ExpenseListRelationFilter
    recurring_expenses?: Recurring_expenseListRelationFilter
  }, "id" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: userCountOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"user"> | string
    email?: StringWithAggregatesFilter<"user"> | string
    name?: StringWithAggregatesFilter<"user"> | string
    password_hash?: StringWithAggregatesFilter<"user"> | string
    created_at?: DateTimeWithAggregatesFilter<"user"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"user"> | Date | string
  }

  export type categoryWhereInput = {
    AND?: categoryWhereInput | categoryWhereInput[]
    OR?: categoryWhereInput[]
    NOT?: categoryWhereInput | categoryWhereInput[]
    id?: StringFilter<"category"> | string
    name?: StringFilter<"category"> | string
    description?: StringNullableFilter<"category"> | string | null
    user_id?: StringFilter<"category"> | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    expenses?: ExpenseListRelationFilter
    recurring_expenses?: Recurring_expenseListRelationFilter
  }

  export type categoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    user_id?: SortOrder
    user?: userOrderByWithRelationInput
    expenses?: expenseOrderByRelationAggregateInput
    recurring_expenses?: recurring_expenseOrderByRelationAggregateInput
  }

  export type categoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name_user_id?: categoryNameUser_idCompoundUniqueInput
    AND?: categoryWhereInput | categoryWhereInput[]
    OR?: categoryWhereInput[]
    NOT?: categoryWhereInput | categoryWhereInput[]
    name?: StringFilter<"category"> | string
    description?: StringNullableFilter<"category"> | string | null
    user_id?: StringFilter<"category"> | string
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    expenses?: ExpenseListRelationFilter
    recurring_expenses?: Recurring_expenseListRelationFilter
  }, "id" | "name_user_id">

  export type categoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    user_id?: SortOrder
    _count?: categoryCountOrderByAggregateInput
    _max?: categoryMaxOrderByAggregateInput
    _min?: categoryMinOrderByAggregateInput
  }

  export type categoryScalarWhereWithAggregatesInput = {
    AND?: categoryScalarWhereWithAggregatesInput | categoryScalarWhereWithAggregatesInput[]
    OR?: categoryScalarWhereWithAggregatesInput[]
    NOT?: categoryScalarWhereWithAggregatesInput | categoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"category"> | string
    name?: StringWithAggregatesFilter<"category"> | string
    description?: StringNullableWithAggregatesFilter<"category"> | string | null
    user_id?: StringWithAggregatesFilter<"category"> | string
  }

  export type expenseWhereInput = {
    AND?: expenseWhereInput | expenseWhereInput[]
    OR?: expenseWhereInput[]
    NOT?: expenseWhereInput | expenseWhereInput[]
    id?: StringFilter<"expense"> | string
    description?: StringFilter<"expense"> | string
    amount?: DecimalFilter<"expense"> | Decimal | DecimalJsLike | number | string
    date?: DateTimeFilter<"expense"> | Date | string
    notes?: StringNullableFilter<"expense"> | string | null
    category_id?: StringFilter<"expense"> | string
    recurring_expense_id?: StringNullableFilter<"expense"> | string | null
    user_id?: StringFilter<"expense"> | string
    category?: XOR<CategoryScalarRelationFilter, categoryWhereInput>
    recurring_expense?: XOR<Recurring_expenseNullableScalarRelationFilter, recurring_expenseWhereInput> | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type expenseOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    notes?: SortOrderInput | SortOrder
    category_id?: SortOrder
    recurring_expense_id?: SortOrderInput | SortOrder
    user_id?: SortOrder
    category?: categoryOrderByWithRelationInput
    recurring_expense?: recurring_expenseOrderByWithRelationInput
    user?: userOrderByWithRelationInput
  }

  export type expenseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: expenseWhereInput | expenseWhereInput[]
    OR?: expenseWhereInput[]
    NOT?: expenseWhereInput | expenseWhereInput[]
    description?: StringFilter<"expense"> | string
    amount?: DecimalFilter<"expense"> | Decimal | DecimalJsLike | number | string
    date?: DateTimeFilter<"expense"> | Date | string
    notes?: StringNullableFilter<"expense"> | string | null
    category_id?: StringFilter<"expense"> | string
    recurring_expense_id?: StringNullableFilter<"expense"> | string | null
    user_id?: StringFilter<"expense"> | string
    category?: XOR<CategoryScalarRelationFilter, categoryWhereInput>
    recurring_expense?: XOR<Recurring_expenseNullableScalarRelationFilter, recurring_expenseWhereInput> | null
    user?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id">

  export type expenseOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    notes?: SortOrderInput | SortOrder
    category_id?: SortOrder
    recurring_expense_id?: SortOrderInput | SortOrder
    user_id?: SortOrder
    _count?: expenseCountOrderByAggregateInput
    _avg?: expenseAvgOrderByAggregateInput
    _max?: expenseMaxOrderByAggregateInput
    _min?: expenseMinOrderByAggregateInput
    _sum?: expenseSumOrderByAggregateInput
  }

  export type expenseScalarWhereWithAggregatesInput = {
    AND?: expenseScalarWhereWithAggregatesInput | expenseScalarWhereWithAggregatesInput[]
    OR?: expenseScalarWhereWithAggregatesInput[]
    NOT?: expenseScalarWhereWithAggregatesInput | expenseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"expense"> | string
    description?: StringWithAggregatesFilter<"expense"> | string
    amount?: DecimalWithAggregatesFilter<"expense"> | Decimal | DecimalJsLike | number | string
    date?: DateTimeWithAggregatesFilter<"expense"> | Date | string
    notes?: StringNullableWithAggregatesFilter<"expense"> | string | null
    category_id?: StringWithAggregatesFilter<"expense"> | string
    recurring_expense_id?: StringNullableWithAggregatesFilter<"expense"> | string | null
    user_id?: StringWithAggregatesFilter<"expense"> | string
  }

  export type recurring_expenseWhereInput = {
    AND?: recurring_expenseWhereInput | recurring_expenseWhereInput[]
    OR?: recurring_expenseWhereInput[]
    NOT?: recurring_expenseWhereInput | recurring_expenseWhereInput[]
    id?: StringFilter<"recurring_expense"> | string
    description?: StringFilter<"recurring_expense"> | string
    amount?: DecimalFilter<"recurring_expense"> | Decimal | DecimalJsLike | number | string
    frequency?: EnumfrequencyFilter<"recurring_expense"> | $Enums.frequency
    start_date?: DateTimeFilter<"recurring_expense"> | Date | string
    end_date?: DateTimeNullableFilter<"recurring_expense"> | Date | string | null
    category_id?: StringFilter<"recurring_expense"> | string
    user_id?: StringFilter<"recurring_expense"> | string
    category?: XOR<CategoryScalarRelationFilter, categoryWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    generated_expenses?: ExpenseListRelationFilter
  }

  export type recurring_expenseOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    frequency?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrderInput | SortOrder
    category_id?: SortOrder
    user_id?: SortOrder
    category?: categoryOrderByWithRelationInput
    user?: userOrderByWithRelationInput
    generated_expenses?: expenseOrderByRelationAggregateInput
  }

  export type recurring_expenseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: recurring_expenseWhereInput | recurring_expenseWhereInput[]
    OR?: recurring_expenseWhereInput[]
    NOT?: recurring_expenseWhereInput | recurring_expenseWhereInput[]
    description?: StringFilter<"recurring_expense"> | string
    amount?: DecimalFilter<"recurring_expense"> | Decimal | DecimalJsLike | number | string
    frequency?: EnumfrequencyFilter<"recurring_expense"> | $Enums.frequency
    start_date?: DateTimeFilter<"recurring_expense"> | Date | string
    end_date?: DateTimeNullableFilter<"recurring_expense"> | Date | string | null
    category_id?: StringFilter<"recurring_expense"> | string
    user_id?: StringFilter<"recurring_expense"> | string
    category?: XOR<CategoryScalarRelationFilter, categoryWhereInput>
    user?: XOR<UserScalarRelationFilter, userWhereInput>
    generated_expenses?: ExpenseListRelationFilter
  }, "id">

  export type recurring_expenseOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    frequency?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrderInput | SortOrder
    category_id?: SortOrder
    user_id?: SortOrder
    _count?: recurring_expenseCountOrderByAggregateInput
    _avg?: recurring_expenseAvgOrderByAggregateInput
    _max?: recurring_expenseMaxOrderByAggregateInput
    _min?: recurring_expenseMinOrderByAggregateInput
    _sum?: recurring_expenseSumOrderByAggregateInput
  }

  export type recurring_expenseScalarWhereWithAggregatesInput = {
    AND?: recurring_expenseScalarWhereWithAggregatesInput | recurring_expenseScalarWhereWithAggregatesInput[]
    OR?: recurring_expenseScalarWhereWithAggregatesInput[]
    NOT?: recurring_expenseScalarWhereWithAggregatesInput | recurring_expenseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"recurring_expense"> | string
    description?: StringWithAggregatesFilter<"recurring_expense"> | string
    amount?: DecimalWithAggregatesFilter<"recurring_expense"> | Decimal | DecimalJsLike | number | string
    frequency?: EnumfrequencyWithAggregatesFilter<"recurring_expense"> | $Enums.frequency
    start_date?: DateTimeWithAggregatesFilter<"recurring_expense"> | Date | string
    end_date?: DateTimeNullableWithAggregatesFilter<"recurring_expense"> | Date | string | null
    category_id?: StringWithAggregatesFilter<"recurring_expense"> | string
    user_id?: StringWithAggregatesFilter<"recurring_expense"> | string
  }

  export type userCreateInput = {
    id?: string
    email: string
    name: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    categories?: categoryCreateNestedManyWithoutUserInput
    expenses?: expenseCreateNestedManyWithoutUserInput
    recurring_expenses?: recurring_expenseCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    categories?: categoryUncheckedCreateNestedManyWithoutUserInput
    expenses?: expenseUncheckedCreateNestedManyWithoutUserInput
    recurring_expenses?: recurring_expenseUncheckedCreateNestedManyWithoutUserInput
  }

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: categoryUpdateManyWithoutUserNestedInput
    expenses?: expenseUpdateManyWithoutUserNestedInput
    recurring_expenses?: recurring_expenseUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: categoryUncheckedUpdateManyWithoutUserNestedInput
    expenses?: expenseUncheckedUpdateManyWithoutUserNestedInput
    recurring_expenses?: recurring_expenseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type userCreateManyInput = {
    id?: string
    email: string
    name: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type categoryCreateInput = {
    id?: string
    name: string
    description?: string | null
    user: userCreateNestedOneWithoutCategoriesInput
    expenses?: expenseCreateNestedManyWithoutCategoryInput
    recurring_expenses?: recurring_expenseCreateNestedManyWithoutCategoryInput
  }

  export type categoryUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    user_id: string
    expenses?: expenseUncheckedCreateNestedManyWithoutCategoryInput
    recurring_expenses?: recurring_expenseUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type categoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user?: userUpdateOneRequiredWithoutCategoriesNestedInput
    expenses?: expenseUpdateManyWithoutCategoryNestedInput
    recurring_expenses?: recurring_expenseUpdateManyWithoutCategoryNestedInput
  }

  export type categoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    expenses?: expenseUncheckedUpdateManyWithoutCategoryNestedInput
    recurring_expenses?: recurring_expenseUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type categoryCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    user_id: string
  }

  export type categoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type expenseCreateInput = {
    id?: string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    date?: Date | string
    notes?: string | null
    category: categoryCreateNestedOneWithoutExpensesInput
    recurring_expense?: recurring_expenseCreateNestedOneWithoutGenerated_expensesInput
    user: userCreateNestedOneWithoutExpensesInput
  }

  export type expenseUncheckedCreateInput = {
    id?: string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    date?: Date | string
    notes?: string | null
    category_id: string
    recurring_expense_id?: string | null
    user_id: string
  }

  export type expenseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    category?: categoryUpdateOneRequiredWithoutExpensesNestedInput
    recurring_expense?: recurring_expenseUpdateOneWithoutGenerated_expensesNestedInput
    user?: userUpdateOneRequiredWithoutExpensesNestedInput
  }

  export type expenseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: StringFieldUpdateOperationsInput | string
    recurring_expense_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type expenseCreateManyInput = {
    id?: string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    date?: Date | string
    notes?: string | null
    category_id: string
    recurring_expense_id?: string | null
    user_id: string
  }

  export type expenseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type expenseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: StringFieldUpdateOperationsInput | string
    recurring_expense_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type recurring_expenseCreateInput = {
    id?: string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    frequency?: $Enums.frequency
    start_date: Date | string
    end_date?: Date | string | null
    category: categoryCreateNestedOneWithoutRecurring_expensesInput
    user: userCreateNestedOneWithoutRecurring_expensesInput
    generated_expenses?: expenseCreateNestedManyWithoutRecurring_expenseInput
  }

  export type recurring_expenseUncheckedCreateInput = {
    id?: string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    frequency?: $Enums.frequency
    start_date: Date | string
    end_date?: Date | string | null
    category_id: string
    user_id: string
    generated_expenses?: expenseUncheckedCreateNestedManyWithoutRecurring_expenseInput
  }

  export type recurring_expenseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frequency?: EnumfrequencyFieldUpdateOperationsInput | $Enums.frequency
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: categoryUpdateOneRequiredWithoutRecurring_expensesNestedInput
    user?: userUpdateOneRequiredWithoutRecurring_expensesNestedInput
    generated_expenses?: expenseUpdateManyWithoutRecurring_expenseNestedInput
  }

  export type recurring_expenseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frequency?: EnumfrequencyFieldUpdateOperationsInput | $Enums.frequency
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    generated_expenses?: expenseUncheckedUpdateManyWithoutRecurring_expenseNestedInput
  }

  export type recurring_expenseCreateManyInput = {
    id?: string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    frequency?: $Enums.frequency
    start_date: Date | string
    end_date?: Date | string | null
    category_id: string
    user_id: string
  }

  export type recurring_expenseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frequency?: EnumfrequencyFieldUpdateOperationsInput | $Enums.frequency
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type recurring_expenseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frequency?: EnumfrequencyFieldUpdateOperationsInput | $Enums.frequency
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CategoryListRelationFilter = {
    every?: categoryWhereInput
    some?: categoryWhereInput
    none?: categoryWhereInput
  }

  export type ExpenseListRelationFilter = {
    every?: expenseWhereInput
    some?: expenseWhereInput
    none?: expenseWhereInput
  }

  export type Recurring_expenseListRelationFilter = {
    every?: recurring_expenseWhereInput
    some?: recurring_expenseWhereInput
    none?: recurring_expenseWhereInput
  }

  export type categoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type expenseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type recurring_expenseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password_hash?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type categoryNameUser_idCompoundUniqueInput = {
    name: string
    user_id: string
  }

  export type categoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    user_id?: SortOrder
  }

  export type categoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    user_id?: SortOrder
  }

  export type categoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    user_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type CategoryScalarRelationFilter = {
    is?: categoryWhereInput
    isNot?: categoryWhereInput
  }

  export type Recurring_expenseNullableScalarRelationFilter = {
    is?: recurring_expenseWhereInput | null
    isNot?: recurring_expenseWhereInput | null
  }

  export type expenseCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    notes?: SortOrder
    category_id?: SortOrder
    recurring_expense_id?: SortOrder
    user_id?: SortOrder
  }

  export type expenseAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type expenseMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    notes?: SortOrder
    category_id?: SortOrder
    recurring_expense_id?: SortOrder
    user_id?: SortOrder
  }

  export type expenseMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    notes?: SortOrder
    category_id?: SortOrder
    recurring_expense_id?: SortOrder
    user_id?: SortOrder
  }

  export type expenseSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumfrequencyFilter<$PrismaModel = never> = {
    equals?: $Enums.frequency | EnumfrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.frequency[] | ListEnumfrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.frequency[] | ListEnumfrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumfrequencyFilter<$PrismaModel> | $Enums.frequency
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type recurring_expenseCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    frequency?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    category_id?: SortOrder
    user_id?: SortOrder
  }

  export type recurring_expenseAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type recurring_expenseMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    frequency?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    category_id?: SortOrder
    user_id?: SortOrder
  }

  export type recurring_expenseMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    frequency?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    category_id?: SortOrder
    user_id?: SortOrder
  }

  export type recurring_expenseSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumfrequencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.frequency | EnumfrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.frequency[] | ListEnumfrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.frequency[] | ListEnumfrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumfrequencyWithAggregatesFilter<$PrismaModel> | $Enums.frequency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumfrequencyFilter<$PrismaModel>
    _max?: NestedEnumfrequencyFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type categoryCreateNestedManyWithoutUserInput = {
    create?: XOR<categoryCreateWithoutUserInput, categoryUncheckedCreateWithoutUserInput> | categoryCreateWithoutUserInput[] | categoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: categoryCreateOrConnectWithoutUserInput | categoryCreateOrConnectWithoutUserInput[]
    createMany?: categoryCreateManyUserInputEnvelope
    connect?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
  }

  export type expenseCreateNestedManyWithoutUserInput = {
    create?: XOR<expenseCreateWithoutUserInput, expenseUncheckedCreateWithoutUserInput> | expenseCreateWithoutUserInput[] | expenseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: expenseCreateOrConnectWithoutUserInput | expenseCreateOrConnectWithoutUserInput[]
    createMany?: expenseCreateManyUserInputEnvelope
    connect?: expenseWhereUniqueInput | expenseWhereUniqueInput[]
  }

  export type recurring_expenseCreateNestedManyWithoutUserInput = {
    create?: XOR<recurring_expenseCreateWithoutUserInput, recurring_expenseUncheckedCreateWithoutUserInput> | recurring_expenseCreateWithoutUserInput[] | recurring_expenseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: recurring_expenseCreateOrConnectWithoutUserInput | recurring_expenseCreateOrConnectWithoutUserInput[]
    createMany?: recurring_expenseCreateManyUserInputEnvelope
    connect?: recurring_expenseWhereUniqueInput | recurring_expenseWhereUniqueInput[]
  }

  export type categoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<categoryCreateWithoutUserInput, categoryUncheckedCreateWithoutUserInput> | categoryCreateWithoutUserInput[] | categoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: categoryCreateOrConnectWithoutUserInput | categoryCreateOrConnectWithoutUserInput[]
    createMany?: categoryCreateManyUserInputEnvelope
    connect?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
  }

  export type expenseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<expenseCreateWithoutUserInput, expenseUncheckedCreateWithoutUserInput> | expenseCreateWithoutUserInput[] | expenseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: expenseCreateOrConnectWithoutUserInput | expenseCreateOrConnectWithoutUserInput[]
    createMany?: expenseCreateManyUserInputEnvelope
    connect?: expenseWhereUniqueInput | expenseWhereUniqueInput[]
  }

  export type recurring_expenseUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<recurring_expenseCreateWithoutUserInput, recurring_expenseUncheckedCreateWithoutUserInput> | recurring_expenseCreateWithoutUserInput[] | recurring_expenseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: recurring_expenseCreateOrConnectWithoutUserInput | recurring_expenseCreateOrConnectWithoutUserInput[]
    createMany?: recurring_expenseCreateManyUserInputEnvelope
    connect?: recurring_expenseWhereUniqueInput | recurring_expenseWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type categoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<categoryCreateWithoutUserInput, categoryUncheckedCreateWithoutUserInput> | categoryCreateWithoutUserInput[] | categoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: categoryCreateOrConnectWithoutUserInput | categoryCreateOrConnectWithoutUserInput[]
    upsert?: categoryUpsertWithWhereUniqueWithoutUserInput | categoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: categoryCreateManyUserInputEnvelope
    set?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
    disconnect?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
    delete?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
    connect?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
    update?: categoryUpdateWithWhereUniqueWithoutUserInput | categoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: categoryUpdateManyWithWhereWithoutUserInput | categoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: categoryScalarWhereInput | categoryScalarWhereInput[]
  }

  export type expenseUpdateManyWithoutUserNestedInput = {
    create?: XOR<expenseCreateWithoutUserInput, expenseUncheckedCreateWithoutUserInput> | expenseCreateWithoutUserInput[] | expenseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: expenseCreateOrConnectWithoutUserInput | expenseCreateOrConnectWithoutUserInput[]
    upsert?: expenseUpsertWithWhereUniqueWithoutUserInput | expenseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: expenseCreateManyUserInputEnvelope
    set?: expenseWhereUniqueInput | expenseWhereUniqueInput[]
    disconnect?: expenseWhereUniqueInput | expenseWhereUniqueInput[]
    delete?: expenseWhereUniqueInput | expenseWhereUniqueInput[]
    connect?: expenseWhereUniqueInput | expenseWhereUniqueInput[]
    update?: expenseUpdateWithWhereUniqueWithoutUserInput | expenseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: expenseUpdateManyWithWhereWithoutUserInput | expenseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: expenseScalarWhereInput | expenseScalarWhereInput[]
  }

  export type recurring_expenseUpdateManyWithoutUserNestedInput = {
    create?: XOR<recurring_expenseCreateWithoutUserInput, recurring_expenseUncheckedCreateWithoutUserInput> | recurring_expenseCreateWithoutUserInput[] | recurring_expenseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: recurring_expenseCreateOrConnectWithoutUserInput | recurring_expenseCreateOrConnectWithoutUserInput[]
    upsert?: recurring_expenseUpsertWithWhereUniqueWithoutUserInput | recurring_expenseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: recurring_expenseCreateManyUserInputEnvelope
    set?: recurring_expenseWhereUniqueInput | recurring_expenseWhereUniqueInput[]
    disconnect?: recurring_expenseWhereUniqueInput | recurring_expenseWhereUniqueInput[]
    delete?: recurring_expenseWhereUniqueInput | recurring_expenseWhereUniqueInput[]
    connect?: recurring_expenseWhereUniqueInput | recurring_expenseWhereUniqueInput[]
    update?: recurring_expenseUpdateWithWhereUniqueWithoutUserInput | recurring_expenseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: recurring_expenseUpdateManyWithWhereWithoutUserInput | recurring_expenseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: recurring_expenseScalarWhereInput | recurring_expenseScalarWhereInput[]
  }

  export type categoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<categoryCreateWithoutUserInput, categoryUncheckedCreateWithoutUserInput> | categoryCreateWithoutUserInput[] | categoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: categoryCreateOrConnectWithoutUserInput | categoryCreateOrConnectWithoutUserInput[]
    upsert?: categoryUpsertWithWhereUniqueWithoutUserInput | categoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: categoryCreateManyUserInputEnvelope
    set?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
    disconnect?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
    delete?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
    connect?: categoryWhereUniqueInput | categoryWhereUniqueInput[]
    update?: categoryUpdateWithWhereUniqueWithoutUserInput | categoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: categoryUpdateManyWithWhereWithoutUserInput | categoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: categoryScalarWhereInput | categoryScalarWhereInput[]
  }

  export type expenseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<expenseCreateWithoutUserInput, expenseUncheckedCreateWithoutUserInput> | expenseCreateWithoutUserInput[] | expenseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: expenseCreateOrConnectWithoutUserInput | expenseCreateOrConnectWithoutUserInput[]
    upsert?: expenseUpsertWithWhereUniqueWithoutUserInput | expenseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: expenseCreateManyUserInputEnvelope
    set?: expenseWhereUniqueInput | expenseWhereUniqueInput[]
    disconnect?: expenseWhereUniqueInput | expenseWhereUniqueInput[]
    delete?: expenseWhereUniqueInput | expenseWhereUniqueInput[]
    connect?: expenseWhereUniqueInput | expenseWhereUniqueInput[]
    update?: expenseUpdateWithWhereUniqueWithoutUserInput | expenseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: expenseUpdateManyWithWhereWithoutUserInput | expenseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: expenseScalarWhereInput | expenseScalarWhereInput[]
  }

  export type recurring_expenseUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<recurring_expenseCreateWithoutUserInput, recurring_expenseUncheckedCreateWithoutUserInput> | recurring_expenseCreateWithoutUserInput[] | recurring_expenseUncheckedCreateWithoutUserInput[]
    connectOrCreate?: recurring_expenseCreateOrConnectWithoutUserInput | recurring_expenseCreateOrConnectWithoutUserInput[]
    upsert?: recurring_expenseUpsertWithWhereUniqueWithoutUserInput | recurring_expenseUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: recurring_expenseCreateManyUserInputEnvelope
    set?: recurring_expenseWhereUniqueInput | recurring_expenseWhereUniqueInput[]
    disconnect?: recurring_expenseWhereUniqueInput | recurring_expenseWhereUniqueInput[]
    delete?: recurring_expenseWhereUniqueInput | recurring_expenseWhereUniqueInput[]
    connect?: recurring_expenseWhereUniqueInput | recurring_expenseWhereUniqueInput[]
    update?: recurring_expenseUpdateWithWhereUniqueWithoutUserInput | recurring_expenseUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: recurring_expenseUpdateManyWithWhereWithoutUserInput | recurring_expenseUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: recurring_expenseScalarWhereInput | recurring_expenseScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<userCreateWithoutCategoriesInput, userUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: userCreateOrConnectWithoutCategoriesInput
    connect?: userWhereUniqueInput
  }

  export type expenseCreateNestedManyWithoutCategoryInput = {
    create?: XOR<expenseCreateWithoutCategoryInput, expenseUncheckedCreateWithoutCategoryInput> | expenseCreateWithoutCategoryInput[] | expenseUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: expenseCreateOrConnectWithoutCategoryInput | expenseCreateOrConnectWithoutCategoryInput[]
    createMany?: expenseCreateManyCategoryInputEnvelope
    connect?: expenseWhereUniqueInput | expenseWhereUniqueInput[]
  }

  export type recurring_expenseCreateNestedManyWithoutCategoryInput = {
    create?: XOR<recurring_expenseCreateWithoutCategoryInput, recurring_expenseUncheckedCreateWithoutCategoryInput> | recurring_expenseCreateWithoutCategoryInput[] | recurring_expenseUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: recurring_expenseCreateOrConnectWithoutCategoryInput | recurring_expenseCreateOrConnectWithoutCategoryInput[]
    createMany?: recurring_expenseCreateManyCategoryInputEnvelope
    connect?: recurring_expenseWhereUniqueInput | recurring_expenseWhereUniqueInput[]
  }

  export type expenseUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<expenseCreateWithoutCategoryInput, expenseUncheckedCreateWithoutCategoryInput> | expenseCreateWithoutCategoryInput[] | expenseUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: expenseCreateOrConnectWithoutCategoryInput | expenseCreateOrConnectWithoutCategoryInput[]
    createMany?: expenseCreateManyCategoryInputEnvelope
    connect?: expenseWhereUniqueInput | expenseWhereUniqueInput[]
  }

  export type recurring_expenseUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<recurring_expenseCreateWithoutCategoryInput, recurring_expenseUncheckedCreateWithoutCategoryInput> | recurring_expenseCreateWithoutCategoryInput[] | recurring_expenseUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: recurring_expenseCreateOrConnectWithoutCategoryInput | recurring_expenseCreateOrConnectWithoutCategoryInput[]
    createMany?: recurring_expenseCreateManyCategoryInputEnvelope
    connect?: recurring_expenseWhereUniqueInput | recurring_expenseWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type userUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: XOR<userCreateWithoutCategoriesInput, userUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: userCreateOrConnectWithoutCategoriesInput
    upsert?: userUpsertWithoutCategoriesInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutCategoriesInput, userUpdateWithoutCategoriesInput>, userUncheckedUpdateWithoutCategoriesInput>
  }

  export type expenseUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<expenseCreateWithoutCategoryInput, expenseUncheckedCreateWithoutCategoryInput> | expenseCreateWithoutCategoryInput[] | expenseUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: expenseCreateOrConnectWithoutCategoryInput | expenseCreateOrConnectWithoutCategoryInput[]
    upsert?: expenseUpsertWithWhereUniqueWithoutCategoryInput | expenseUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: expenseCreateManyCategoryInputEnvelope
    set?: expenseWhereUniqueInput | expenseWhereUniqueInput[]
    disconnect?: expenseWhereUniqueInput | expenseWhereUniqueInput[]
    delete?: expenseWhereUniqueInput | expenseWhereUniqueInput[]
    connect?: expenseWhereUniqueInput | expenseWhereUniqueInput[]
    update?: expenseUpdateWithWhereUniqueWithoutCategoryInput | expenseUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: expenseUpdateManyWithWhereWithoutCategoryInput | expenseUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: expenseScalarWhereInput | expenseScalarWhereInput[]
  }

  export type recurring_expenseUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<recurring_expenseCreateWithoutCategoryInput, recurring_expenseUncheckedCreateWithoutCategoryInput> | recurring_expenseCreateWithoutCategoryInput[] | recurring_expenseUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: recurring_expenseCreateOrConnectWithoutCategoryInput | recurring_expenseCreateOrConnectWithoutCategoryInput[]
    upsert?: recurring_expenseUpsertWithWhereUniqueWithoutCategoryInput | recurring_expenseUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: recurring_expenseCreateManyCategoryInputEnvelope
    set?: recurring_expenseWhereUniqueInput | recurring_expenseWhereUniqueInput[]
    disconnect?: recurring_expenseWhereUniqueInput | recurring_expenseWhereUniqueInput[]
    delete?: recurring_expenseWhereUniqueInput | recurring_expenseWhereUniqueInput[]
    connect?: recurring_expenseWhereUniqueInput | recurring_expenseWhereUniqueInput[]
    update?: recurring_expenseUpdateWithWhereUniqueWithoutCategoryInput | recurring_expenseUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: recurring_expenseUpdateManyWithWhereWithoutCategoryInput | recurring_expenseUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: recurring_expenseScalarWhereInput | recurring_expenseScalarWhereInput[]
  }

  export type expenseUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<expenseCreateWithoutCategoryInput, expenseUncheckedCreateWithoutCategoryInput> | expenseCreateWithoutCategoryInput[] | expenseUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: expenseCreateOrConnectWithoutCategoryInput | expenseCreateOrConnectWithoutCategoryInput[]
    upsert?: expenseUpsertWithWhereUniqueWithoutCategoryInput | expenseUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: expenseCreateManyCategoryInputEnvelope
    set?: expenseWhereUniqueInput | expenseWhereUniqueInput[]
    disconnect?: expenseWhereUniqueInput | expenseWhereUniqueInput[]
    delete?: expenseWhereUniqueInput | expenseWhereUniqueInput[]
    connect?: expenseWhereUniqueInput | expenseWhereUniqueInput[]
    update?: expenseUpdateWithWhereUniqueWithoutCategoryInput | expenseUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: expenseUpdateManyWithWhereWithoutCategoryInput | expenseUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: expenseScalarWhereInput | expenseScalarWhereInput[]
  }

  export type recurring_expenseUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<recurring_expenseCreateWithoutCategoryInput, recurring_expenseUncheckedCreateWithoutCategoryInput> | recurring_expenseCreateWithoutCategoryInput[] | recurring_expenseUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: recurring_expenseCreateOrConnectWithoutCategoryInput | recurring_expenseCreateOrConnectWithoutCategoryInput[]
    upsert?: recurring_expenseUpsertWithWhereUniqueWithoutCategoryInput | recurring_expenseUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: recurring_expenseCreateManyCategoryInputEnvelope
    set?: recurring_expenseWhereUniqueInput | recurring_expenseWhereUniqueInput[]
    disconnect?: recurring_expenseWhereUniqueInput | recurring_expenseWhereUniqueInput[]
    delete?: recurring_expenseWhereUniqueInput | recurring_expenseWhereUniqueInput[]
    connect?: recurring_expenseWhereUniqueInput | recurring_expenseWhereUniqueInput[]
    update?: recurring_expenseUpdateWithWhereUniqueWithoutCategoryInput | recurring_expenseUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: recurring_expenseUpdateManyWithWhereWithoutCategoryInput | recurring_expenseUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: recurring_expenseScalarWhereInput | recurring_expenseScalarWhereInput[]
  }

  export type categoryCreateNestedOneWithoutExpensesInput = {
    create?: XOR<categoryCreateWithoutExpensesInput, categoryUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: categoryCreateOrConnectWithoutExpensesInput
    connect?: categoryWhereUniqueInput
  }

  export type recurring_expenseCreateNestedOneWithoutGenerated_expensesInput = {
    create?: XOR<recurring_expenseCreateWithoutGenerated_expensesInput, recurring_expenseUncheckedCreateWithoutGenerated_expensesInput>
    connectOrCreate?: recurring_expenseCreateOrConnectWithoutGenerated_expensesInput
    connect?: recurring_expenseWhereUniqueInput
  }

  export type userCreateNestedOneWithoutExpensesInput = {
    create?: XOR<userCreateWithoutExpensesInput, userUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: userCreateOrConnectWithoutExpensesInput
    connect?: userWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type categoryUpdateOneRequiredWithoutExpensesNestedInput = {
    create?: XOR<categoryCreateWithoutExpensesInput, categoryUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: categoryCreateOrConnectWithoutExpensesInput
    upsert?: categoryUpsertWithoutExpensesInput
    connect?: categoryWhereUniqueInput
    update?: XOR<XOR<categoryUpdateToOneWithWhereWithoutExpensesInput, categoryUpdateWithoutExpensesInput>, categoryUncheckedUpdateWithoutExpensesInput>
  }

  export type recurring_expenseUpdateOneWithoutGenerated_expensesNestedInput = {
    create?: XOR<recurring_expenseCreateWithoutGenerated_expensesInput, recurring_expenseUncheckedCreateWithoutGenerated_expensesInput>
    connectOrCreate?: recurring_expenseCreateOrConnectWithoutGenerated_expensesInput
    upsert?: recurring_expenseUpsertWithoutGenerated_expensesInput
    disconnect?: recurring_expenseWhereInput | boolean
    delete?: recurring_expenseWhereInput | boolean
    connect?: recurring_expenseWhereUniqueInput
    update?: XOR<XOR<recurring_expenseUpdateToOneWithWhereWithoutGenerated_expensesInput, recurring_expenseUpdateWithoutGenerated_expensesInput>, recurring_expenseUncheckedUpdateWithoutGenerated_expensesInput>
  }

  export type userUpdateOneRequiredWithoutExpensesNestedInput = {
    create?: XOR<userCreateWithoutExpensesInput, userUncheckedCreateWithoutExpensesInput>
    connectOrCreate?: userCreateOrConnectWithoutExpensesInput
    upsert?: userUpsertWithoutExpensesInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutExpensesInput, userUpdateWithoutExpensesInput>, userUncheckedUpdateWithoutExpensesInput>
  }

  export type categoryCreateNestedOneWithoutRecurring_expensesInput = {
    create?: XOR<categoryCreateWithoutRecurring_expensesInput, categoryUncheckedCreateWithoutRecurring_expensesInput>
    connectOrCreate?: categoryCreateOrConnectWithoutRecurring_expensesInput
    connect?: categoryWhereUniqueInput
  }

  export type userCreateNestedOneWithoutRecurring_expensesInput = {
    create?: XOR<userCreateWithoutRecurring_expensesInput, userUncheckedCreateWithoutRecurring_expensesInput>
    connectOrCreate?: userCreateOrConnectWithoutRecurring_expensesInput
    connect?: userWhereUniqueInput
  }

  export type expenseCreateNestedManyWithoutRecurring_expenseInput = {
    create?: XOR<expenseCreateWithoutRecurring_expenseInput, expenseUncheckedCreateWithoutRecurring_expenseInput> | expenseCreateWithoutRecurring_expenseInput[] | expenseUncheckedCreateWithoutRecurring_expenseInput[]
    connectOrCreate?: expenseCreateOrConnectWithoutRecurring_expenseInput | expenseCreateOrConnectWithoutRecurring_expenseInput[]
    createMany?: expenseCreateManyRecurring_expenseInputEnvelope
    connect?: expenseWhereUniqueInput | expenseWhereUniqueInput[]
  }

  export type expenseUncheckedCreateNestedManyWithoutRecurring_expenseInput = {
    create?: XOR<expenseCreateWithoutRecurring_expenseInput, expenseUncheckedCreateWithoutRecurring_expenseInput> | expenseCreateWithoutRecurring_expenseInput[] | expenseUncheckedCreateWithoutRecurring_expenseInput[]
    connectOrCreate?: expenseCreateOrConnectWithoutRecurring_expenseInput | expenseCreateOrConnectWithoutRecurring_expenseInput[]
    createMany?: expenseCreateManyRecurring_expenseInputEnvelope
    connect?: expenseWhereUniqueInput | expenseWhereUniqueInput[]
  }

  export type EnumfrequencyFieldUpdateOperationsInput = {
    set?: $Enums.frequency
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type categoryUpdateOneRequiredWithoutRecurring_expensesNestedInput = {
    create?: XOR<categoryCreateWithoutRecurring_expensesInput, categoryUncheckedCreateWithoutRecurring_expensesInput>
    connectOrCreate?: categoryCreateOrConnectWithoutRecurring_expensesInput
    upsert?: categoryUpsertWithoutRecurring_expensesInput
    connect?: categoryWhereUniqueInput
    update?: XOR<XOR<categoryUpdateToOneWithWhereWithoutRecurring_expensesInput, categoryUpdateWithoutRecurring_expensesInput>, categoryUncheckedUpdateWithoutRecurring_expensesInput>
  }

  export type userUpdateOneRequiredWithoutRecurring_expensesNestedInput = {
    create?: XOR<userCreateWithoutRecurring_expensesInput, userUncheckedCreateWithoutRecurring_expensesInput>
    connectOrCreate?: userCreateOrConnectWithoutRecurring_expensesInput
    upsert?: userUpsertWithoutRecurring_expensesInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutRecurring_expensesInput, userUpdateWithoutRecurring_expensesInput>, userUncheckedUpdateWithoutRecurring_expensesInput>
  }

  export type expenseUpdateManyWithoutRecurring_expenseNestedInput = {
    create?: XOR<expenseCreateWithoutRecurring_expenseInput, expenseUncheckedCreateWithoutRecurring_expenseInput> | expenseCreateWithoutRecurring_expenseInput[] | expenseUncheckedCreateWithoutRecurring_expenseInput[]
    connectOrCreate?: expenseCreateOrConnectWithoutRecurring_expenseInput | expenseCreateOrConnectWithoutRecurring_expenseInput[]
    upsert?: expenseUpsertWithWhereUniqueWithoutRecurring_expenseInput | expenseUpsertWithWhereUniqueWithoutRecurring_expenseInput[]
    createMany?: expenseCreateManyRecurring_expenseInputEnvelope
    set?: expenseWhereUniqueInput | expenseWhereUniqueInput[]
    disconnect?: expenseWhereUniqueInput | expenseWhereUniqueInput[]
    delete?: expenseWhereUniqueInput | expenseWhereUniqueInput[]
    connect?: expenseWhereUniqueInput | expenseWhereUniqueInput[]
    update?: expenseUpdateWithWhereUniqueWithoutRecurring_expenseInput | expenseUpdateWithWhereUniqueWithoutRecurring_expenseInput[]
    updateMany?: expenseUpdateManyWithWhereWithoutRecurring_expenseInput | expenseUpdateManyWithWhereWithoutRecurring_expenseInput[]
    deleteMany?: expenseScalarWhereInput | expenseScalarWhereInput[]
  }

  export type expenseUncheckedUpdateManyWithoutRecurring_expenseNestedInput = {
    create?: XOR<expenseCreateWithoutRecurring_expenseInput, expenseUncheckedCreateWithoutRecurring_expenseInput> | expenseCreateWithoutRecurring_expenseInput[] | expenseUncheckedCreateWithoutRecurring_expenseInput[]
    connectOrCreate?: expenseCreateOrConnectWithoutRecurring_expenseInput | expenseCreateOrConnectWithoutRecurring_expenseInput[]
    upsert?: expenseUpsertWithWhereUniqueWithoutRecurring_expenseInput | expenseUpsertWithWhereUniqueWithoutRecurring_expenseInput[]
    createMany?: expenseCreateManyRecurring_expenseInputEnvelope
    set?: expenseWhereUniqueInput | expenseWhereUniqueInput[]
    disconnect?: expenseWhereUniqueInput | expenseWhereUniqueInput[]
    delete?: expenseWhereUniqueInput | expenseWhereUniqueInput[]
    connect?: expenseWhereUniqueInput | expenseWhereUniqueInput[]
    update?: expenseUpdateWithWhereUniqueWithoutRecurring_expenseInput | expenseUpdateWithWhereUniqueWithoutRecurring_expenseInput[]
    updateMany?: expenseUpdateManyWithWhereWithoutRecurring_expenseInput | expenseUpdateManyWithWhereWithoutRecurring_expenseInput[]
    deleteMany?: expenseScalarWhereInput | expenseScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumfrequencyFilter<$PrismaModel = never> = {
    equals?: $Enums.frequency | EnumfrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.frequency[] | ListEnumfrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.frequency[] | ListEnumfrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumfrequencyFilter<$PrismaModel> | $Enums.frequency
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumfrequencyWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.frequency | EnumfrequencyFieldRefInput<$PrismaModel>
    in?: $Enums.frequency[] | ListEnumfrequencyFieldRefInput<$PrismaModel>
    notIn?: $Enums.frequency[] | ListEnumfrequencyFieldRefInput<$PrismaModel>
    not?: NestedEnumfrequencyWithAggregatesFilter<$PrismaModel> | $Enums.frequency
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumfrequencyFilter<$PrismaModel>
    _max?: NestedEnumfrequencyFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type categoryCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    expenses?: expenseCreateNestedManyWithoutCategoryInput
    recurring_expenses?: recurring_expenseCreateNestedManyWithoutCategoryInput
  }

  export type categoryUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    expenses?: expenseUncheckedCreateNestedManyWithoutCategoryInput
    recurring_expenses?: recurring_expenseUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type categoryCreateOrConnectWithoutUserInput = {
    where: categoryWhereUniqueInput
    create: XOR<categoryCreateWithoutUserInput, categoryUncheckedCreateWithoutUserInput>
  }

  export type categoryCreateManyUserInputEnvelope = {
    data: categoryCreateManyUserInput | categoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type expenseCreateWithoutUserInput = {
    id?: string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    date?: Date | string
    notes?: string | null
    category: categoryCreateNestedOneWithoutExpensesInput
    recurring_expense?: recurring_expenseCreateNestedOneWithoutGenerated_expensesInput
  }

  export type expenseUncheckedCreateWithoutUserInput = {
    id?: string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    date?: Date | string
    notes?: string | null
    category_id: string
    recurring_expense_id?: string | null
  }

  export type expenseCreateOrConnectWithoutUserInput = {
    where: expenseWhereUniqueInput
    create: XOR<expenseCreateWithoutUserInput, expenseUncheckedCreateWithoutUserInput>
  }

  export type expenseCreateManyUserInputEnvelope = {
    data: expenseCreateManyUserInput | expenseCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type recurring_expenseCreateWithoutUserInput = {
    id?: string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    frequency?: $Enums.frequency
    start_date: Date | string
    end_date?: Date | string | null
    category: categoryCreateNestedOneWithoutRecurring_expensesInput
    generated_expenses?: expenseCreateNestedManyWithoutRecurring_expenseInput
  }

  export type recurring_expenseUncheckedCreateWithoutUserInput = {
    id?: string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    frequency?: $Enums.frequency
    start_date: Date | string
    end_date?: Date | string | null
    category_id: string
    generated_expenses?: expenseUncheckedCreateNestedManyWithoutRecurring_expenseInput
  }

  export type recurring_expenseCreateOrConnectWithoutUserInput = {
    where: recurring_expenseWhereUniqueInput
    create: XOR<recurring_expenseCreateWithoutUserInput, recurring_expenseUncheckedCreateWithoutUserInput>
  }

  export type recurring_expenseCreateManyUserInputEnvelope = {
    data: recurring_expenseCreateManyUserInput | recurring_expenseCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type categoryUpsertWithWhereUniqueWithoutUserInput = {
    where: categoryWhereUniqueInput
    update: XOR<categoryUpdateWithoutUserInput, categoryUncheckedUpdateWithoutUserInput>
    create: XOR<categoryCreateWithoutUserInput, categoryUncheckedCreateWithoutUserInput>
  }

  export type categoryUpdateWithWhereUniqueWithoutUserInput = {
    where: categoryWhereUniqueInput
    data: XOR<categoryUpdateWithoutUserInput, categoryUncheckedUpdateWithoutUserInput>
  }

  export type categoryUpdateManyWithWhereWithoutUserInput = {
    where: categoryScalarWhereInput
    data: XOR<categoryUpdateManyMutationInput, categoryUncheckedUpdateManyWithoutUserInput>
  }

  export type categoryScalarWhereInput = {
    AND?: categoryScalarWhereInput | categoryScalarWhereInput[]
    OR?: categoryScalarWhereInput[]
    NOT?: categoryScalarWhereInput | categoryScalarWhereInput[]
    id?: StringFilter<"category"> | string
    name?: StringFilter<"category"> | string
    description?: StringNullableFilter<"category"> | string | null
    user_id?: StringFilter<"category"> | string
  }

  export type expenseUpsertWithWhereUniqueWithoutUserInput = {
    where: expenseWhereUniqueInput
    update: XOR<expenseUpdateWithoutUserInput, expenseUncheckedUpdateWithoutUserInput>
    create: XOR<expenseCreateWithoutUserInput, expenseUncheckedCreateWithoutUserInput>
  }

  export type expenseUpdateWithWhereUniqueWithoutUserInput = {
    where: expenseWhereUniqueInput
    data: XOR<expenseUpdateWithoutUserInput, expenseUncheckedUpdateWithoutUserInput>
  }

  export type expenseUpdateManyWithWhereWithoutUserInput = {
    where: expenseScalarWhereInput
    data: XOR<expenseUpdateManyMutationInput, expenseUncheckedUpdateManyWithoutUserInput>
  }

  export type expenseScalarWhereInput = {
    AND?: expenseScalarWhereInput | expenseScalarWhereInput[]
    OR?: expenseScalarWhereInput[]
    NOT?: expenseScalarWhereInput | expenseScalarWhereInput[]
    id?: StringFilter<"expense"> | string
    description?: StringFilter<"expense"> | string
    amount?: DecimalFilter<"expense"> | Decimal | DecimalJsLike | number | string
    date?: DateTimeFilter<"expense"> | Date | string
    notes?: StringNullableFilter<"expense"> | string | null
    category_id?: StringFilter<"expense"> | string
    recurring_expense_id?: StringNullableFilter<"expense"> | string | null
    user_id?: StringFilter<"expense"> | string
  }

  export type recurring_expenseUpsertWithWhereUniqueWithoutUserInput = {
    where: recurring_expenseWhereUniqueInput
    update: XOR<recurring_expenseUpdateWithoutUserInput, recurring_expenseUncheckedUpdateWithoutUserInput>
    create: XOR<recurring_expenseCreateWithoutUserInput, recurring_expenseUncheckedCreateWithoutUserInput>
  }

  export type recurring_expenseUpdateWithWhereUniqueWithoutUserInput = {
    where: recurring_expenseWhereUniqueInput
    data: XOR<recurring_expenseUpdateWithoutUserInput, recurring_expenseUncheckedUpdateWithoutUserInput>
  }

  export type recurring_expenseUpdateManyWithWhereWithoutUserInput = {
    where: recurring_expenseScalarWhereInput
    data: XOR<recurring_expenseUpdateManyMutationInput, recurring_expenseUncheckedUpdateManyWithoutUserInput>
  }

  export type recurring_expenseScalarWhereInput = {
    AND?: recurring_expenseScalarWhereInput | recurring_expenseScalarWhereInput[]
    OR?: recurring_expenseScalarWhereInput[]
    NOT?: recurring_expenseScalarWhereInput | recurring_expenseScalarWhereInput[]
    id?: StringFilter<"recurring_expense"> | string
    description?: StringFilter<"recurring_expense"> | string
    amount?: DecimalFilter<"recurring_expense"> | Decimal | DecimalJsLike | number | string
    frequency?: EnumfrequencyFilter<"recurring_expense"> | $Enums.frequency
    start_date?: DateTimeFilter<"recurring_expense"> | Date | string
    end_date?: DateTimeNullableFilter<"recurring_expense"> | Date | string | null
    category_id?: StringFilter<"recurring_expense"> | string
    user_id?: StringFilter<"recurring_expense"> | string
  }

  export type userCreateWithoutCategoriesInput = {
    id?: string
    email: string
    name: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    expenses?: expenseCreateNestedManyWithoutUserInput
    recurring_expenses?: recurring_expenseCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutCategoriesInput = {
    id?: string
    email: string
    name: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    expenses?: expenseUncheckedCreateNestedManyWithoutUserInput
    recurring_expenses?: recurring_expenseUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutCategoriesInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutCategoriesInput, userUncheckedCreateWithoutCategoriesInput>
  }

  export type expenseCreateWithoutCategoryInput = {
    id?: string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    date?: Date | string
    notes?: string | null
    recurring_expense?: recurring_expenseCreateNestedOneWithoutGenerated_expensesInput
    user: userCreateNestedOneWithoutExpensesInput
  }

  export type expenseUncheckedCreateWithoutCategoryInput = {
    id?: string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    date?: Date | string
    notes?: string | null
    recurring_expense_id?: string | null
    user_id: string
  }

  export type expenseCreateOrConnectWithoutCategoryInput = {
    where: expenseWhereUniqueInput
    create: XOR<expenseCreateWithoutCategoryInput, expenseUncheckedCreateWithoutCategoryInput>
  }

  export type expenseCreateManyCategoryInputEnvelope = {
    data: expenseCreateManyCategoryInput | expenseCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type recurring_expenseCreateWithoutCategoryInput = {
    id?: string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    frequency?: $Enums.frequency
    start_date: Date | string
    end_date?: Date | string | null
    user: userCreateNestedOneWithoutRecurring_expensesInput
    generated_expenses?: expenseCreateNestedManyWithoutRecurring_expenseInput
  }

  export type recurring_expenseUncheckedCreateWithoutCategoryInput = {
    id?: string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    frequency?: $Enums.frequency
    start_date: Date | string
    end_date?: Date | string | null
    user_id: string
    generated_expenses?: expenseUncheckedCreateNestedManyWithoutRecurring_expenseInput
  }

  export type recurring_expenseCreateOrConnectWithoutCategoryInput = {
    where: recurring_expenseWhereUniqueInput
    create: XOR<recurring_expenseCreateWithoutCategoryInput, recurring_expenseUncheckedCreateWithoutCategoryInput>
  }

  export type recurring_expenseCreateManyCategoryInputEnvelope = {
    data: recurring_expenseCreateManyCategoryInput | recurring_expenseCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithoutCategoriesInput = {
    update: XOR<userUpdateWithoutCategoriesInput, userUncheckedUpdateWithoutCategoriesInput>
    create: XOR<userCreateWithoutCategoriesInput, userUncheckedCreateWithoutCategoriesInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutCategoriesInput, userUncheckedUpdateWithoutCategoriesInput>
  }

  export type userUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expenses?: expenseUpdateManyWithoutUserNestedInput
    recurring_expenses?: recurring_expenseUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expenses?: expenseUncheckedUpdateManyWithoutUserNestedInput
    recurring_expenses?: recurring_expenseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type expenseUpsertWithWhereUniqueWithoutCategoryInput = {
    where: expenseWhereUniqueInput
    update: XOR<expenseUpdateWithoutCategoryInput, expenseUncheckedUpdateWithoutCategoryInput>
    create: XOR<expenseCreateWithoutCategoryInput, expenseUncheckedCreateWithoutCategoryInput>
  }

  export type expenseUpdateWithWhereUniqueWithoutCategoryInput = {
    where: expenseWhereUniqueInput
    data: XOR<expenseUpdateWithoutCategoryInput, expenseUncheckedUpdateWithoutCategoryInput>
  }

  export type expenseUpdateManyWithWhereWithoutCategoryInput = {
    where: expenseScalarWhereInput
    data: XOR<expenseUpdateManyMutationInput, expenseUncheckedUpdateManyWithoutCategoryInput>
  }

  export type recurring_expenseUpsertWithWhereUniqueWithoutCategoryInput = {
    where: recurring_expenseWhereUniqueInput
    update: XOR<recurring_expenseUpdateWithoutCategoryInput, recurring_expenseUncheckedUpdateWithoutCategoryInput>
    create: XOR<recurring_expenseCreateWithoutCategoryInput, recurring_expenseUncheckedCreateWithoutCategoryInput>
  }

  export type recurring_expenseUpdateWithWhereUniqueWithoutCategoryInput = {
    where: recurring_expenseWhereUniqueInput
    data: XOR<recurring_expenseUpdateWithoutCategoryInput, recurring_expenseUncheckedUpdateWithoutCategoryInput>
  }

  export type recurring_expenseUpdateManyWithWhereWithoutCategoryInput = {
    where: recurring_expenseScalarWhereInput
    data: XOR<recurring_expenseUpdateManyMutationInput, recurring_expenseUncheckedUpdateManyWithoutCategoryInput>
  }

  export type categoryCreateWithoutExpensesInput = {
    id?: string
    name: string
    description?: string | null
    user: userCreateNestedOneWithoutCategoriesInput
    recurring_expenses?: recurring_expenseCreateNestedManyWithoutCategoryInput
  }

  export type categoryUncheckedCreateWithoutExpensesInput = {
    id?: string
    name: string
    description?: string | null
    user_id: string
    recurring_expenses?: recurring_expenseUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type categoryCreateOrConnectWithoutExpensesInput = {
    where: categoryWhereUniqueInput
    create: XOR<categoryCreateWithoutExpensesInput, categoryUncheckedCreateWithoutExpensesInput>
  }

  export type recurring_expenseCreateWithoutGenerated_expensesInput = {
    id?: string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    frequency?: $Enums.frequency
    start_date: Date | string
    end_date?: Date | string | null
    category: categoryCreateNestedOneWithoutRecurring_expensesInput
    user: userCreateNestedOneWithoutRecurring_expensesInput
  }

  export type recurring_expenseUncheckedCreateWithoutGenerated_expensesInput = {
    id?: string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    frequency?: $Enums.frequency
    start_date: Date | string
    end_date?: Date | string | null
    category_id: string
    user_id: string
  }

  export type recurring_expenseCreateOrConnectWithoutGenerated_expensesInput = {
    where: recurring_expenseWhereUniqueInput
    create: XOR<recurring_expenseCreateWithoutGenerated_expensesInput, recurring_expenseUncheckedCreateWithoutGenerated_expensesInput>
  }

  export type userCreateWithoutExpensesInput = {
    id?: string
    email: string
    name: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    categories?: categoryCreateNestedManyWithoutUserInput
    recurring_expenses?: recurring_expenseCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutExpensesInput = {
    id?: string
    email: string
    name: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    categories?: categoryUncheckedCreateNestedManyWithoutUserInput
    recurring_expenses?: recurring_expenseUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutExpensesInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutExpensesInput, userUncheckedCreateWithoutExpensesInput>
  }

  export type categoryUpsertWithoutExpensesInput = {
    update: XOR<categoryUpdateWithoutExpensesInput, categoryUncheckedUpdateWithoutExpensesInput>
    create: XOR<categoryCreateWithoutExpensesInput, categoryUncheckedCreateWithoutExpensesInput>
    where?: categoryWhereInput
  }

  export type categoryUpdateToOneWithWhereWithoutExpensesInput = {
    where?: categoryWhereInput
    data: XOR<categoryUpdateWithoutExpensesInput, categoryUncheckedUpdateWithoutExpensesInput>
  }

  export type categoryUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user?: userUpdateOneRequiredWithoutCategoriesNestedInput
    recurring_expenses?: recurring_expenseUpdateManyWithoutCategoryNestedInput
  }

  export type categoryUncheckedUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    recurring_expenses?: recurring_expenseUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type recurring_expenseUpsertWithoutGenerated_expensesInput = {
    update: XOR<recurring_expenseUpdateWithoutGenerated_expensesInput, recurring_expenseUncheckedUpdateWithoutGenerated_expensesInput>
    create: XOR<recurring_expenseCreateWithoutGenerated_expensesInput, recurring_expenseUncheckedCreateWithoutGenerated_expensesInput>
    where?: recurring_expenseWhereInput
  }

  export type recurring_expenseUpdateToOneWithWhereWithoutGenerated_expensesInput = {
    where?: recurring_expenseWhereInput
    data: XOR<recurring_expenseUpdateWithoutGenerated_expensesInput, recurring_expenseUncheckedUpdateWithoutGenerated_expensesInput>
  }

  export type recurring_expenseUpdateWithoutGenerated_expensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frequency?: EnumfrequencyFieldUpdateOperationsInput | $Enums.frequency
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: categoryUpdateOneRequiredWithoutRecurring_expensesNestedInput
    user?: userUpdateOneRequiredWithoutRecurring_expensesNestedInput
  }

  export type recurring_expenseUncheckedUpdateWithoutGenerated_expensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frequency?: EnumfrequencyFieldUpdateOperationsInput | $Enums.frequency
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type userUpsertWithoutExpensesInput = {
    update: XOR<userUpdateWithoutExpensesInput, userUncheckedUpdateWithoutExpensesInput>
    create: XOR<userCreateWithoutExpensesInput, userUncheckedCreateWithoutExpensesInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutExpensesInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutExpensesInput, userUncheckedUpdateWithoutExpensesInput>
  }

  export type userUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: categoryUpdateManyWithoutUserNestedInput
    recurring_expenses?: recurring_expenseUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutExpensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: categoryUncheckedUpdateManyWithoutUserNestedInput
    recurring_expenses?: recurring_expenseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type categoryCreateWithoutRecurring_expensesInput = {
    id?: string
    name: string
    description?: string | null
    user: userCreateNestedOneWithoutCategoriesInput
    expenses?: expenseCreateNestedManyWithoutCategoryInput
  }

  export type categoryUncheckedCreateWithoutRecurring_expensesInput = {
    id?: string
    name: string
    description?: string | null
    user_id: string
    expenses?: expenseUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type categoryCreateOrConnectWithoutRecurring_expensesInput = {
    where: categoryWhereUniqueInput
    create: XOR<categoryCreateWithoutRecurring_expensesInput, categoryUncheckedCreateWithoutRecurring_expensesInput>
  }

  export type userCreateWithoutRecurring_expensesInput = {
    id?: string
    email: string
    name: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    categories?: categoryCreateNestedManyWithoutUserInput
    expenses?: expenseCreateNestedManyWithoutUserInput
  }

  export type userUncheckedCreateWithoutRecurring_expensesInput = {
    id?: string
    email: string
    name: string
    password_hash: string
    created_at?: Date | string
    updated_at?: Date | string
    categories?: categoryUncheckedCreateNestedManyWithoutUserInput
    expenses?: expenseUncheckedCreateNestedManyWithoutUserInput
  }

  export type userCreateOrConnectWithoutRecurring_expensesInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutRecurring_expensesInput, userUncheckedCreateWithoutRecurring_expensesInput>
  }

  export type expenseCreateWithoutRecurring_expenseInput = {
    id?: string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    date?: Date | string
    notes?: string | null
    category: categoryCreateNestedOneWithoutExpensesInput
    user: userCreateNestedOneWithoutExpensesInput
  }

  export type expenseUncheckedCreateWithoutRecurring_expenseInput = {
    id?: string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    date?: Date | string
    notes?: string | null
    category_id: string
    user_id: string
  }

  export type expenseCreateOrConnectWithoutRecurring_expenseInput = {
    where: expenseWhereUniqueInput
    create: XOR<expenseCreateWithoutRecurring_expenseInput, expenseUncheckedCreateWithoutRecurring_expenseInput>
  }

  export type expenseCreateManyRecurring_expenseInputEnvelope = {
    data: expenseCreateManyRecurring_expenseInput | expenseCreateManyRecurring_expenseInput[]
    skipDuplicates?: boolean
  }

  export type categoryUpsertWithoutRecurring_expensesInput = {
    update: XOR<categoryUpdateWithoutRecurring_expensesInput, categoryUncheckedUpdateWithoutRecurring_expensesInput>
    create: XOR<categoryCreateWithoutRecurring_expensesInput, categoryUncheckedCreateWithoutRecurring_expensesInput>
    where?: categoryWhereInput
  }

  export type categoryUpdateToOneWithWhereWithoutRecurring_expensesInput = {
    where?: categoryWhereInput
    data: XOR<categoryUpdateWithoutRecurring_expensesInput, categoryUncheckedUpdateWithoutRecurring_expensesInput>
  }

  export type categoryUpdateWithoutRecurring_expensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user?: userUpdateOneRequiredWithoutCategoriesNestedInput
    expenses?: expenseUpdateManyWithoutCategoryNestedInput
  }

  export type categoryUncheckedUpdateWithoutRecurring_expensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    expenses?: expenseUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type userUpsertWithoutRecurring_expensesInput = {
    update: XOR<userUpdateWithoutRecurring_expensesInput, userUncheckedUpdateWithoutRecurring_expensesInput>
    create: XOR<userCreateWithoutRecurring_expensesInput, userUncheckedCreateWithoutRecurring_expensesInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutRecurring_expensesInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutRecurring_expensesInput, userUncheckedUpdateWithoutRecurring_expensesInput>
  }

  export type userUpdateWithoutRecurring_expensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: categoryUpdateManyWithoutUserNestedInput
    expenses?: expenseUpdateManyWithoutUserNestedInput
  }

  export type userUncheckedUpdateWithoutRecurring_expensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: categoryUncheckedUpdateManyWithoutUserNestedInput
    expenses?: expenseUncheckedUpdateManyWithoutUserNestedInput
  }

  export type expenseUpsertWithWhereUniqueWithoutRecurring_expenseInput = {
    where: expenseWhereUniqueInput
    update: XOR<expenseUpdateWithoutRecurring_expenseInput, expenseUncheckedUpdateWithoutRecurring_expenseInput>
    create: XOR<expenseCreateWithoutRecurring_expenseInput, expenseUncheckedCreateWithoutRecurring_expenseInput>
  }

  export type expenseUpdateWithWhereUniqueWithoutRecurring_expenseInput = {
    where: expenseWhereUniqueInput
    data: XOR<expenseUpdateWithoutRecurring_expenseInput, expenseUncheckedUpdateWithoutRecurring_expenseInput>
  }

  export type expenseUpdateManyWithWhereWithoutRecurring_expenseInput = {
    where: expenseScalarWhereInput
    data: XOR<expenseUpdateManyMutationInput, expenseUncheckedUpdateManyWithoutRecurring_expenseInput>
  }

  export type categoryCreateManyUserInput = {
    id?: string
    name: string
    description?: string | null
  }

  export type expenseCreateManyUserInput = {
    id?: string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    date?: Date | string
    notes?: string | null
    category_id: string
    recurring_expense_id?: string | null
  }

  export type recurring_expenseCreateManyUserInput = {
    id?: string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    frequency?: $Enums.frequency
    start_date: Date | string
    end_date?: Date | string | null
    category_id: string
  }

  export type categoryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    expenses?: expenseUpdateManyWithoutCategoryNestedInput
    recurring_expenses?: recurring_expenseUpdateManyWithoutCategoryNestedInput
  }

  export type categoryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    expenses?: expenseUncheckedUpdateManyWithoutCategoryNestedInput
    recurring_expenses?: recurring_expenseUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type categoryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type expenseUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    category?: categoryUpdateOneRequiredWithoutExpensesNestedInput
    recurring_expense?: recurring_expenseUpdateOneWithoutGenerated_expensesNestedInput
  }

  export type expenseUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: StringFieldUpdateOperationsInput | string
    recurring_expense_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type expenseUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: StringFieldUpdateOperationsInput | string
    recurring_expense_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type recurring_expenseUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frequency?: EnumfrequencyFieldUpdateOperationsInput | $Enums.frequency
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: categoryUpdateOneRequiredWithoutRecurring_expensesNestedInput
    generated_expenses?: expenseUpdateManyWithoutRecurring_expenseNestedInput
  }

  export type recurring_expenseUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frequency?: EnumfrequencyFieldUpdateOperationsInput | $Enums.frequency
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category_id?: StringFieldUpdateOperationsInput | string
    generated_expenses?: expenseUncheckedUpdateManyWithoutRecurring_expenseNestedInput
  }

  export type recurring_expenseUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frequency?: EnumfrequencyFieldUpdateOperationsInput | $Enums.frequency
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category_id?: StringFieldUpdateOperationsInput | string
  }

  export type expenseCreateManyCategoryInput = {
    id?: string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    date?: Date | string
    notes?: string | null
    recurring_expense_id?: string | null
    user_id: string
  }

  export type recurring_expenseCreateManyCategoryInput = {
    id?: string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    frequency?: $Enums.frequency
    start_date: Date | string
    end_date?: Date | string | null
    user_id: string
  }

  export type expenseUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    recurring_expense?: recurring_expenseUpdateOneWithoutGenerated_expensesNestedInput
    user?: userUpdateOneRequiredWithoutExpensesNestedInput
  }

  export type expenseUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    recurring_expense_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type expenseUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    recurring_expense_id?: NullableStringFieldUpdateOperationsInput | string | null
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type recurring_expenseUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frequency?: EnumfrequencyFieldUpdateOperationsInput | $Enums.frequency
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: userUpdateOneRequiredWithoutRecurring_expensesNestedInput
    generated_expenses?: expenseUpdateManyWithoutRecurring_expenseNestedInput
  }

  export type recurring_expenseUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frequency?: EnumfrequencyFieldUpdateOperationsInput | $Enums.frequency
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: StringFieldUpdateOperationsInput | string
    generated_expenses?: expenseUncheckedUpdateManyWithoutRecurring_expenseNestedInput
  }

  export type recurring_expenseUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    frequency?: EnumfrequencyFieldUpdateOperationsInput | $Enums.frequency
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type expenseCreateManyRecurring_expenseInput = {
    id?: string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    date?: Date | string
    notes?: string | null
    category_id: string
    user_id: string
  }

  export type expenseUpdateWithoutRecurring_expenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    category?: categoryUpdateOneRequiredWithoutExpensesNestedInput
    user?: userUpdateOneRequiredWithoutExpensesNestedInput
  }

  export type expenseUncheckedUpdateWithoutRecurring_expenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type expenseUncheckedUpdateManyWithoutRecurring_expenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}