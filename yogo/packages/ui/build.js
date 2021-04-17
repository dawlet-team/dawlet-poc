const { build } = require('esbuild')

const watch = process.env.WATCH === 'true'
console.log(`Building @dawlet/ui with esbuild.\nWatch Option: ${watch}`)

const glob = require('glob')
const entryPoints = glob.sync('./src/**/!(*.stories).tsx')
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