module.exports = plop => {
	plop.setGenerator('generator-lambda-netlify', {
		description: 'Plop generator for lambda functions deployed to Netlify',
		prompts: [
			{
				type: 'input',
				name: 'name',
				message: 'Give a name for the project. Will be used in package.json',
				validate: input => {
					if (/.+/.test(input)) return true
					return 'Name is required'
				}
			},
			{
				type: 'input',
				name: 'description',
				message: 'Give a description for the project. Will be used in package.json',
			},
			{
				type: 'input',
				name: 'repository',
				message: 'Paste the github repository link. Will be used in package.json',
				validate: input => {
					if (/.+/.test(input)) return true
					return 'Repository is required'
				}
			},
			{
				type: 'input',
				name: 'author',
				message: 'Name the author of the project. Will be used in package.json',
				validate: input => {
					if (/.+/.test(input)) return true
					return 'Author is required'
				}
			}
		],
		actions: [
			{
				type: 'add',
				path: '.env',
				templateFile: 'node_modules/@ziro/generator/templates/.env'
			},
			{
				type: 'add',
				path: '.gitignore',
				templateFile: 'node_modules/@ziro/generator/templates/.##gitignore##'
			},
			{
				type: 'add',
				path: 'netlify.toml',
				templateFile: 'node_modules/@ziro/generator/templates/netlify.toml'
			},
			{
				type: 'add',
				path: 'package.json',
				templateFile: 'node_modules/@ziro/generator/templates/package.json'
			},
			{
				type: 'add',
				path: 'webpack.functions.js',
				templateFile: 'node_modules/@ziro/generator/templates/webpack.functions.js'
			},
			{
				type: 'add',
				path: 'src/templates/main.js',
				templateFile: 'node_modules/@ziro/generator/templates/src/templates/main.js'
			},
			{
				type: 'add',
				path: 'src/templates/request.js',
				templateFile: 'node_modules/@ziro/generator/templates/src/templates/request.js'
			},
			{
				type: 'add',
				path: 'src/lambdas/lambda.js',
				templateFile: 'node_modules/@ziro/generator/templates/src/lambdas/lambda.js'
			}
		]
	})
}