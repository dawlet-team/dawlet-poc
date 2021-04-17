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
  external: ['electron'],
  watch,
  logLevel: 'error',
  target: 'esnext'
}).then(() => {
  // For some weird reasons, jazz-midi needs package.json to be present in the lib folder, so manually copy it
  const { join } = require('path')
  const { copyFileSync, constants }  = require('fs')
  copyFileSync(join(__dirname, 'package.json'), join(__dirname, './lib/package.json'))
})
