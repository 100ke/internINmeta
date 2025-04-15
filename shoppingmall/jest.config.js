module.exports = {
    transform: {
      '^.+\\.[t|j]sx?$': 'babel-jest',  // JSX/JS 파일을 babel-jest로 처리
    },
    moduleNameMapper: {
      '\\.css$': 'identity-obj-proxy',  // CSS 모킹 처리
    },
    testEnvironment: 'jsdom',  // jsdom 환경을 사용
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  };