const { controllerInitializer } = require('./controller')

/*
  Handles dependency injection and initialization of dependant objects.
  for example, the chosen model implementation is psql, and thus we import
  the needed models, and initalize our controller with the chosen dependency here.
 */
function dependencyInjection() {
    const models = {
        UserModel: require('../models/psql/user')
    }
    return {
        controllers: controllerInitializer(models)
    }
}

module.exports = dependencyInjection()