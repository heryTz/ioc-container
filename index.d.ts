export default class SimpleContainer {

    set(id: any, dependency: any): this

    get<T>(id: any): T

}