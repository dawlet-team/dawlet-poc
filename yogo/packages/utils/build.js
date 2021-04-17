const { build } = require('esbuild')

const watch = process.env.WATCH === 'true'
console.log(`Building @dawlet/utils with esbuild.\nWatch Option: ${watch}`)

const glob = require('glob')
const entryPoints = glob.sync('./src/**/!(*.test).ts')
build({
  entryPoints,
  platform: 'node',
  bundle: true,
  outbase: './src',
  outdir: './lib',
  watch,
  logLevel: 'error',
  target: 'esnext'
})