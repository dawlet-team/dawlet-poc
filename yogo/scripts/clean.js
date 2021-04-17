const glob = require('glob')
const rimraf = require('rimraf')

const PATTERN = './*(dawlets|packages)/*/lib'
const files = glob.sync(PATTERN)
console.log(`cleaning the following files`)
console.log(files)

rimraf.sync(PATTERN)
console.log('success')