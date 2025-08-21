import typescript from '@rollup/plugin-typescript';

export default [
  // ES Module build
  {
    input: 'src/index.js',
    output: {
      file: 'dist/index.esm.js',
      format: 'es'
    },
    plugins: [
      typescript({
        declaration: true,
        declarationDir: 'dist',
        rootDir: 'src'
      })
    ]
  },
  // CommonJS build
  {
    input: 'src/index.js',
    output: {
      file: 'dist/index.js',
      format: 'cjs',
      exports: 'named'
    },
    plugins: [typescript()]
  },
  // UMD build for browsers
  {
    input: 'src/index.js',
    output: {
      file: 'dist/skara.umd.js',
      format: 'umd',
      name: 'Skara'
    },
    plugins: [typescript()]
  }
];