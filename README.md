# IOC Container

A simple IOC container

## Install

Install via a package manager:

```bash
npm install @herytz/ioc-container
```

## Usage

Create the container and these dependecies

```js
import IOCContainer from '@herytz/ioc-container'
import { SimpleService } from './service/simpleService'

const TYPES = {
    SimpleService: 'SimpleService'
}

const container = new IOCContainer()

container.set(TYPES.SimpleService, new SimpleService())

export default container
```

Use the container everywhere

```js
// Import statement

const simpleService = container.get<SimpleService>(TYPES.SimpleService)
```
