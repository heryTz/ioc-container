export default class IOCContainer {
  private dependencies = new Map();

  set(id: any, dep: any): this {
    this.dependencies.set(id, dep);
    return this;
  }

  get<T>(id: any): T {
    if (this.dependencies.has(id) === false)
      throw `"${id}" dependency not found`;
    return this.dependencies.get(id);
  }
}
