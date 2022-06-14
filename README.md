# Simple Container

A simple IOC container

## Install

Install via a package manager:

```bash
npm install simple-container
```

## Usage

Create the container and these dependecies

```js
import SimpleContainer from 'simple-container'
import { SimpleService } from './service/simpleService'

const TYPES = {
    SimpleService: 'SimpleService'
}

const container = new SimpleContainer()

container.set(TYPES.SimpleService, new SimpleService())

export default container
```

Use the container everywhere

```js
// Import statement

const simpleService = container.get<SimpleService>(TYPES.SimpleService)
```
