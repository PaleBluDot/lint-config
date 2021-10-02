odule.exports = {
	extends: ["eslint:recommended", "plugin:prettier/recommended"],
	rules: {
		"arrow-body-style": ["error"],
		"no-template-curly-in-string": "error",
		"no-useless-concat": "error",
		"no-useless-escape": "off",
		"no-var": "error",
		"one-var": ["error", "never"],
		"prefer-arrow-callback": ["error", { allowNamedFunctions: true }],
		"prefer-const": "error",
		"prefer-template": "error",
		quotes: ["error", "single", { avoidEscape: true }],
		"template-curly-spacing": "error",
		"template-tag-spacing": "error",
	},
};
