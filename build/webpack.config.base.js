module.exports = {
  entry: './src/index.js',
  module: {
    noParse: ['react', 'quill'],
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-2', 'react']
        },
        exclude: /node_modules/
      }
    ]
  },
  externals: {
    'react': {
      'commonjs': 'react',
      'commonjs2': 'react',
      'amd': 'react',
      'root': 'React'
    },
    'quill': {
      'commonjs': 'quill',
      'commonjs2': 'quill',
      'amd': 'quill',
      'root': 'Quill'
    }
  }
}
