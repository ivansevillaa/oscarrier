module.exports = {
  testEnvironment: "jest-environment-jsdom",
  snapshotSerializers: ["@emotion/jest/serializer"],
  moduleNameMapper: {
    // TODO: complete the other aliases of the project
    "@components/(.*)": "<rootDir>/components/$1"
  }
};
