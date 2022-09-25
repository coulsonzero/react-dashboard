# React Dashboard

## 项目技术栈

- 前端框架：React 18.1
- CSS样式：SCSS、 styled-components
- 扩展库：ScrollReveal、Echarts5
- 图标库：react-icons
- 语法规范：Eslint
- 别名路径：craco


其他可选：
- 组件库：Ant Design
- CSS样式: Tailwind

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


## Eslint

```bash
$ yarn add eslint --dev
$ yarn create @eslint/config 	# or `npm init @eslint/config`
```

## docker

```sh
$ docker-compose up --build -d nginx-app
```