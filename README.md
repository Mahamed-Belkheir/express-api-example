# Express API Example
This is an example backend API using Express and Qufl.
I've made it as a example of an MVC structured project, while also experimenting with my own dependency injection
implmenetation.

### Project Structure
The project is structured around the Model View Controller pattern, in my design, the Model represents the data access access layer, the Controller the business logic layer, and the View represents the API endpoints.

##### Models (/models)
Currently only the node-pg implementation exists, and only includes a User model, which exposes a simple interface for
dealing with User data, a create and find methods, and a password comparing method, since the password hashing was a data layer responsibility, the methods for it exist there.

##### Controllers (/controllers)
Currently only the user controller exists, the controller uses the dependency injection pattern, and requires the model to be injected at initialization, throughout the application, you'd use the initialized controller instances from the server bootstrapping module. Controllers handle the business logic without knowledge of any implementation details, they do not know how HTTP requests arrive, nor how data is saved or retrieved.

##### View (/routes)
The View is the exposed API of the application, a HTTP server in this case, it handles HTTP data and authentication based on the Controller's results, the View does not instantiate controllers on its own, it uses the dependency injected controllers from the bootstrapping module.

##### Bootstrap (/server, /dependencies)
This includes the modules for bootstrapping dependencies and the HTTP server itself, boot.js handles registering routes for the Express server. /dependencies folder includes initialization of dependencies, including ones that require DI.