module.exports = {
  webpack(config) {
    const experiments = config.experiments || {};
    config.experiments = {...experiments, asyncWebAssembly: true};
    config.output.webassemblyModuleFilename = 'static/wasm/[modulehash].wasm'
    return config
  },
}
