module.exports = {
  extends: ["plugin:prettier/recommended"],
  plugin: ["markdown"],
  rules: {
    "prettier/prettier": "error",
    "generator-star-spacing": "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },
  overrides: [
    {
      files: ["**/*.md"],
      processor: "markdown/markdown"
    }
  ]
};
