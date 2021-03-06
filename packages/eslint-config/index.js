module.exports = {
	env: {
		browser: true,
		es2020: true,
	},
	parserOptions: {
		ecmaVersion: 2017,
	},
	extends: ["eslint:recommended"],
	rules: {
		"arrow-body-style": ["error"],
		"no-dupe-args": 2,
		"no-dupe-class-members": 2,
		"no-duplicate-imports": 1,
		"no-template-curly-in-string": "error",
		"no-useless-concat": "error",
		"no-useless-escape": "off",
		"no-unneeded-ternary": "off",
		"no-var": "error",
		"one-var": ["error", "never"],
		"prefer-arrow-callback": ["error", { allowNamedFunctions: true }],
		"prefer-const": "error",
		"prefer-template": "error",
		"template-curly-spacing": "error",
		"template-tag-spacing": "error",
		quotes: ["error", "single", { avoidEscape: true }],
		"valid-typeof": 1,
	},
};
