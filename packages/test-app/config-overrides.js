const {
  override,
  addBabelPlugin,
  babelInclude,
  addBundleVisualizer,
  setWebpackOptimizationSplitChunks,
} = require('customize-cra')

const path = require('path')

const vendors = [
  'react',
  'recompose',
  'regenerator-runtime',
  'prop-types',
  'redux',
  'lodash',
  'immer',
  'object-assign',
  'warning',
  'pluralize',
  '@babel',
  'deepmerge',
  'dom-helpers',
  'hoist-non-react-statics',
  'inherits',
  'invariant',
  'is-buffer',
  'json-stringify-safe',
]

const ui = ['@material-ui', 'formik', 'yup']

const dckit = ['@dckit']

const makeRegExp = deps => new RegExp(deps.join('|'))

const chunks = {
  chunks: 'async',
  minSize: 30000,
  minChunks: 2,
  maxAsyncRequests: 5,
  maxInitialRequests: 5,
  name: false,
  cacheGroups: {
    vendors: {
      test: makeRegExp(vendors),
      chunks: 'initial',
      name: 'vendors',
      enforce: true,
      priority: -10,
    },
    ui: {
      test: makeRegExp(ui),
      chunks: 'initial',
      name: 'ui',
      enforce: true,
      priority: -15,
    },
    dckit: {
      test: makeRegExp(dckit),
      chunks: 'initial',
      name: 'dckit',
      enforce: true,
      priority: -20,
    },
    default: { minChunks: 3, priority: -30, reuseExistingChunk: true },
  },
}

module.exports = override(
  babelInclude([
    path.resolve('src'), // main source
    path.resolve('../comp'), // shared package source
  ]),
  addBabelPlugin([
    'module-resolver',
    {
      root: ['./'],
      alias: {
        '@': './src',
      },
    },
  ]),
  process.env.ANALYZE && addBundleVisualizer(),
  setWebpackOptimizationSplitChunks(chunks)
)
