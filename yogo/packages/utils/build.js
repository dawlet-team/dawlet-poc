const { build } = require('esbuild')

const watch = process.env.WATCH === 'true'
console.log(`Building @dawlet/utils with esbuild.\nWatch Option: ${watch}`)

build({
  entryPoints: ['./src/'],
  bundle: true,
  platform: 'node',
  outfile: 'lib/index.js',
  external: [
    'electron'
  ],
  watch,
  logLevel: 'error'
})