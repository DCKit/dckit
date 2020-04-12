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
  'react-is',
  'react-dom',
  'react-prop-types',
  'recompose',
  'regenerator-runtime',
  'prop-types',
  'prop-types-extra',
  'react-router',
  'react-router-redux',
  'redux',
  'react-redux',
  'redux-saga',
  'lodash',
  'lodash-es',
  'immutable',
  'object-assign',
  'warning',
  'pluralize',
  '@babel',
  '@babel/runtime',
  '@babel/runtime-corejs2',
  'deepmerge',
  'dom-helpers',
  'hoist-non-react-statics',
  'inherits',
  'invariant',
  'is-buffer',
  'json-stringify-safe',
]

const utils = ['@material-ui', 'formik', 'yup']

const dckit = ['(@dckit/.+)']

const makeRegExp = deps => new RegExp(deps.join('|'))

const chunks = {
  chunks: 'async',
  minSize: 30000,
  minChunks: 2,
  maxAsyncRequests: 5,
  maxInitialRequests: 3,
  name: false,
  cacheGroups: {
    vendors: {
      test: makeRegExp(vendors),
      chunks: 'initial',
      name: 'vendors',
      enforce: true,
      priority: -10,
    },
    utils: {
      test: makeRegExp(utils),
      chunks: 'initial',
      name: 'utils',
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
  babelInclude([path.resolve('src'), path.resolve('../comp')]),
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
