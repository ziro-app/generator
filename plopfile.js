module.exports = plop => {
	plop.setGenerator('react-firebase', {
		description: 'Generator for apps that use React and Firebase',
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
		actions: []
	})
	plop.setGenerator('lambda-netlify', {
		description: 'Generator for lambda functions deployed to Netlify',
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
				templateFile: 'node_modules/@ziro/generator/templates/lambda-netlify/.env'
			},
			{
				type: 'add',
				path: '.gitignore',
				templateFile: 'node_modules/@ziro/generator/templates/lambda-netlify/.##gitignore##'
			},
			{
				type: 'add',
				path: 'netlify.toml',
				templateFile: 'node_modules/@ziro/generator/templates/lambda-netlify/netlify.toml'
			},
			{
				type: 'add',
				path: 'package.json',
				templateFile: 'node_modules/@ziro/generator/templates/lambda-netlify/package.json'
			},
			{
				type: 'add',
				path: 'webpack.functions.js',
				templateFile: 'node_modules/@ziro/generator/templates/lambda-netlify/webpack.functions.js'
			},
			{
				type: 'add',
				path: 'src/templates/main.js',
				templateFile: 'node_modules/@ziro/generator/templates/lambda-netlify/src/templates/main.js'
			},
			{
				type: 'add',
				path: 'src/templates/request.js',
				templateFile: 'node_modules/@ziro/generator/templates/lambda-netlify/src/templates/request.js'
			},
			{
				type: 'add',
				path: 'src/lambdas/lambda.js',
				templateFile: 'node_modules/@ziro/generator/templates/lambda-netlify/src/lambdas/lambda.js'
			}
		]
	})
}