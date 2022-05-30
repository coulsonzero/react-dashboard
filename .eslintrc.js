module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ["eslint:recommended", "plugin:react/recommended"],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react"],
	rules: {
        // 禁止末尾分号
        "comma-dangle": ["error", "never"]
		// 强制空格： { Components }
		'array-bracket-spacing': ['error', 'always'],
		'object-curly-spacing': ['error', 'always'],
        // 防止在react组件定义中缺少props验证
        'react/prop-types': "off",
    },
}
