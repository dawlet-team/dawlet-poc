export type DawletEngineOptions = {
  isProd?: boolean
  port?: number
}

type DeterminedOptions = Required<DawletEngineOptions>

const defaultOptions = {
    isProd: true,
    port: 4000
}

function getDefaultOptions(): DeterminedOptions {
  return defaultOptions
}

export function extractOptions(opt?: DawletEngineOptions): DeterminedOptions {
  if(!opt) return getDefaultOptions()
  return {
    isProd: opt.isProd ?? defaultOptions.isProd,
    port: opt.port ?? defaultOptions.port
  }
}