const config = require('./webpack.config.base')

config.output = {
  path: './lib',
  filename: 'react-quill.js',
  library: 'ReactQuill',
  libraryTarget: 'commonjs2'
}

module.exports = config
