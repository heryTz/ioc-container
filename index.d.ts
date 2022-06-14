export default class IOCContainer {

    set(id: any, dependency: any): this

    get<T>(id: any): T

}