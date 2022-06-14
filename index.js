// index.ts
var IOCContainer = class {
  constructor() {
    this.dependencies = /* @__PURE__ */ new Map();
  }
  set(id, dep) {
    this.dependencies.set(id, dep);
    return this;
  }
  get(id) {
    if (this.dependencies.has(id) === false)
      throw `Invalid dependency`;
    return this.dependencies.get(id);
  }
};
export {
  IOCContainer as default
};
