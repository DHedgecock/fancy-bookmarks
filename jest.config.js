module.exports = {
  verbose: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  testEnvironment: 'node',
  testURL: 'http://localhost',
  setupFiles: ['raf/polyfill', './config/enzyme.js'],
  snapshotSerializers: ['enzyme-to-json/serializer']
}
