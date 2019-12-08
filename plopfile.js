module.exports = plop => {
	plop.setGenerator('generator-lambda-netlify', {
		description: 'Plop generator for lambda functions deployed to Netlify',
		prompts: [
			{
				type: 'input',
				name: 'project-name',
				message: 'Give a name for the project',
				validate: input => {
					if (/.+/.test(input)) return true
					return 'Project name is required'
				}
			},
			{
				type: 'input',
				name: 'project-description',
				message: 'Give a description for the project',
			}
		],
		actions: [
			{
				type: 'add',
				path: '.gitignore',
				templateFile: 'node_modules/@ziro/generator/templates/.##gitignore##'
			}
		]
	})
}