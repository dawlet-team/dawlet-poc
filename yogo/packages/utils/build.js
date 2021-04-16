const { build } = require('esbuild')

const watch = process.env.WATCH === 'true'
console.log(`Building @dawlet/utils with esbuild.\nWatch Option: ${watch}`)

const glob = require('glob')
const entryPoints = glob.sync('./src/**/*.ts')
build({
  entryPoints,
  platform: 'node',
  outbase: './src',
  outdir: './lib',
  watch,
  logLevel: 'error'
})