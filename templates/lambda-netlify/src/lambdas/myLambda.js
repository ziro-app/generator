const lambda = require('../templates/lambda')
const request = require('../templates/request')

// Mudar o nome 'myLambda' para o nome da sua funcao e também alterar o nome do arquivo

const myLambda = event => {
	return request()
}

//export
const handler = lambda(myLambda)
module.exports = { handler }