// TODO: support run test with diffent environment (client, server, and linter maybe)
module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/test/jest-setup.ts"],
  snapshotSerializers: ["@emotion/jest/serializer"],
  moduleNameMapper: {
    // TODO: complete the other aliases of the project
    "@components/(.*)": "<rootDir>/components/$1",
    "@utils/(.*)": "<rootDir>/utils/$1",
    "@constants/(.*)": "<rootDir>/constants/$1"
  },
  collectCoverageFrom: [
    "components/**/*.{ts,tsx}",
    "pages/**/*.{ts,tsx}",
    "utils/**/*.ts"
  ],
  // TODO: add coverage threshold
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname"
  ]
};
