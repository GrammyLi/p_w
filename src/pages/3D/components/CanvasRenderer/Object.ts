export class BaseObject {
  static new<T>(...args: any[]): T {
    //@ts-ignore
    return new this(...args) as T;
  }
}
