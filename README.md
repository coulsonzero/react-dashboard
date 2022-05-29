# React Dashboard



## 新建项目

```sh
$ yarn create react-app react-dashboard
$ cd react-dashboard
$ yarn add sass styled-components scrollreveal echarts react-icons
$ yarn start
```

## 别名@设置

```
$ yarn add @craco/craco
```

**craco.config.js**

```js
const path = require("path")

module.exports = {
	webpack: {
		alias: {
			"@": path.resolve(__dirname, "src"),
		},
	},
}
```

**jsconfig.json**

```json
{
	"compilerOptions": {
		"baseUrl": "./",
		"paths": {
			"@/*": ["src/*"]
		}
	}
}
```

**package.json**

```json
	"scripts": {
		"start": "craco start",
		"build": "craco build",
    }
```
