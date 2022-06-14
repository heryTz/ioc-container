import { buildSync } from 'esbuild'

buildSync({
    entryPoints: ['index.ts'],
    bundle: true,
    format: 'esm',
    outfile: 'index.js'
})