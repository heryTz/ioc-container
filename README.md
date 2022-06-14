# IOC Container

A simple IOC container

## Install

Install via a package manager:

```bash
npm install ioc-container
```

## Usage

Create the container and these dependecies

```js
import IOCContainer from 'ioc-container'
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
