const lambda = require('../templates/lambda')
const request = require('../templates/request')

// Mudar o nome 'myLambdaFunction' para o nome da sua funcao e também alterar o nome do arquivo

const myLambdaFunction = event => {
	return request()
}

//export
const handler = lambda(myLambdaFunction)
module.exports = { handler }