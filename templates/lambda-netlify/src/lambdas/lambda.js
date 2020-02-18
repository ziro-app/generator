const main = require('../templates/main')
const request = require('../templates/request')

// Mudar o nome lambda para o nome da sua funcao

const lambda = async event => {
	return request()
}

module.exports = { main(lambda) }