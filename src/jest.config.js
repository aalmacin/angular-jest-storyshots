module.exports = {
  preset: 'jest-preset-angular',
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node', '.html'],
  setupFiles: ['<rootDir>/.jest/register-context.js']
};
