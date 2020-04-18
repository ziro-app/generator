const lambda = require('../templates/lambda')
const request = require('../templates/request')

// Mudar o nome 'myLambdaFunction' para o nome da sua funcao

const myLambdaFunction = event => {
	return request()
}

//export
const handler = lambda(myLambdaFunction)
module.exports = { handler }