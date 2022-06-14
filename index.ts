export default class SimpleContainer {
    private dependencies = new Map()

    set(id: any, dep: any): this {
        this.dependencies.set(id, dep)
        return this
    }

    get<T>(id: any): T {
        if (this.dependencies.has(id) === false) throw `Invalid dependency`
        return this.dependencies.get(id)
    }
}