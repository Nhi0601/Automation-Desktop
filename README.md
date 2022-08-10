{
  "devDependencies": {
    "@typescript-eslint/eslint-plugin": "^5.32.0",
    "@typescript-eslint/parser": "^5.32.0",
    "@wdio/cli": "^7.20.9",
    "@wdio/local-runner": "^7.20.9",
    "@wdio/mocha-framework": "^7.20.7",
    "@wdio/spec-reporter": "^7.20.8",
    "@wdio/types": "^7.20.7",
    "chromedriver": "^96.0.0",
    "eslint": "^8.21.0",
    "eslint-plugin-prettier": "^4.2.1",
    "eslint-plugin-simple-import-sort": "^7.0.0",
    "prettier": "^2.7.1",
    "ts-node": "^10.9.1",
    "typescript": "^4.7.4",
    "wdio-chromedriver-service": "^7.3.2"
  },
  "scripts": {
    "test": "wdio run wdio.conf.js"
  }
}