module.exports = {
  extends: [
    "airbnb",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:flowtype/recommended",
    "prettier",
    "prettier/react"
  ],
  rules: {
    "linebreak-style": 0,
    semi: 2,
    "no-console": 1,
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"]
      }
    ]
  },
  env: {
    "react-native/react-native": true,
    jest: true,
    browser: true
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    }
  },
  plugins: [
    "react",
    "jsx-a11y",
    "import",
    "flowtype",
    "jest",
    "prettier",
    "react-native"
  ]
};
