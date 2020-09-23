# Estruturas de Dados

Este projeto poderá ser utilizado durante toda a disciplina de Estruturas de Dados. Para cada estrutura de dados desenvolvida será criada sua respectava Classe e Testes.

Utilize esse repositório se não quiser configurar um novo.

Caso deseje criar um novo repositório execute os seguintes comandos:

```
npx gitignore node
npm init -y
git init
npm install --save-dev jest
npm install --save-dev babel-jest @babel/core @babel/preset-env @babel/plugin-proposal-class-properties @types/jest
```

Crie o arquivo babel.config.js e adicione as informações abaixo no arquivo:
```
module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				targets: {
					node: 'current',
				},
			},
		],
	],
	plugins: ["@babel/plugin-proposal-class-properties"]
};
```
Para preparar o ambiente para criação de documentação execute o seguinte comando:
```
npm install --save-dev jsdoc
```
Crie o arquivo jsdoc.json e adicione as informações abaixo no arquivo:
```
{
	"source": {
		"include": [
			"./src"
		],
		"includePattern": ".js$",
		"excludePattern": "(node_modules/|docs)"
	},
	"plugins": [
		"plugins/markdown"
	],
	"opts": {
		"encoding": "utf8",
		"readme": "./readme.md",
		"destination": "docs/",
		"recurse": true,
		"verbose": true
	}
}
```
Modifique o arquivo package.json para adicionar o script de criação de documentação:
```
	"scripts": {
		"test": "jest",
		"docs": "./node_modules/.bin/jsdoc -c jsdoc.json"
	},
```

Para executar os testes:
```
npm test
```
Para criar a documentação:
```
npm run docs
```