module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: "eslint:recommended",
  parser: "babel-eslint",
  plugins: ["react"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "space-before-function-paren": 0,
    "react/jsx-uses-vars": "error",
    "react/jsx-uses-react": "error",
  },
};
