module.exports = {
  "extends": "airbnb-base",
  "rules": {
    "mocha/no-exclusive-tests": "error",
    "no-console": 0,
    "spaced-comment": [0, "never"]
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
        "jsx": true
    }
  },
  "env": {
    "node": true,
    "browser": true,
    "mocha": true
  },
  "globals": {
    "FlowRouter": true,
    "classnames": true,
    "Promise": true,
    "d3": true,
  },
  "plugins": [
    "mocha"
  ]
}
