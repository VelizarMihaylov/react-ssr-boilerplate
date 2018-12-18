const path = require('path')

const rules = [
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        plugins: [
          'react-hot-loader/babel',
          '@babel/plugin-proposal-object-rest-spread',
          'emotion'
        ],
        presets: [
          '@babel/preset-react',
          ['@babel/preset-env',
            {
              'useBuiltIns': 'entry',
              modules: process.env.PRODUCTION === 'true' ? 'auto' : false
            }
          ]
        ]
      }
    }
  }
]

const output = {
  filename: 'bundle.js',
  path: path.resolve('./', 'dist/public'),
  publicPath: '/'
}

const resolve = {
  alias: {
    Components: path.resolve('./', 'client/src/Components')
  },
  extensions: ['.js', '.jsx', '.scss']
}

module.exports = {
  rules,
  output,
  resolve
}
