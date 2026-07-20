export default [
  {
    files: ["assets/js/**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "script",
      globals: {
        document: "readonly",
        window: "readonly",
        IntersectionObserver: "readonly",
      },
    },
    rules: {
      "no-console": "error",
      "no-unused-vars": "error",
      "no-var": "error",
      "prefer-const": "error",
    },
  },
];
