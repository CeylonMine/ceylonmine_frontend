module.exports = {
  extends: ["next/core-web-vitals"],
  rules: {
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // Checks hook dependencies
    "@typescript-eslint/no-unused-vars": ["warn", {
      "argsIgnorePattern": "^_",
      "varsIgnorePattern": "^_"
    }],
    "@next/next/no-img-element": "warn", // Temporarily warn instead of error for img tags
  }
};
